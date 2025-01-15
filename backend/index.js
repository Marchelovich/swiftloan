require('dotenv').config();
require('./emailScheduler');

const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const Application = require('./models/Application');
const multer = require('multer');
const path = require('path');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Инициализация Stripe SDK
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',   // `${process.env.FRONTEND_URL}
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

//file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.UPLOADS_FOLDER || 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname); 
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  },
});

const upload = multer({ storage });

//application form submit
app.post('/submit-application',  upload.fields([
  { name: 'proofOfResidence', maxCount: 1 },
  { name: 'idVerification', maxCount: 1 },
]), async (req, res) => {
  try {
    const applicationData = req.body;
    const proofOfResidenceFile = req.files?.proofOfResidence?.[0];
    const idVerificationFile = req.files?.idVerification?.[0];

    const flattenedData = { 
      ...applicationData, 
       proofOfResidence: proofOfResidenceFile?.path,
      idVerification: idVerificationFile?.path
    };
   
    if (flattenedData.birthYear && flattenedData.birthMonth && flattenedData.birthDay) {
      flattenedData.birth = `${flattenedData.birthYear}-${String(flattenedData.birthMonth).padStart(2, '0')}-${String(flattenedData.birthDay).padStart(2, '0')}`;
      delete flattenedData.birthYear;
      delete flattenedData.birthMonth;
      delete flattenedData.birthDay;
    }

    const application = await Application.create(flattenedData);

    res.status(201).json({
      message: 'Application submitted successfully!',
      applicationId: application.id,
    });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ message: 'Failed to submit application.' });
  }
});

//help form send
app.post('/send-help-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL, 
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.SUPPORT_EMAIL,
      subject: `Help Request: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.post('/create-checkout-session', async (req, res) => {
  const { applicationId } = req.body;

  if (!applicationId) {
    return res.status(400).send({ error: 'Application ID is required' });
  }

  try {
    const application = await Application.findByPk(applicationId);
    if (!application) {
      return res.status(404).send({ error: 'Application not found' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: application.email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Loan Application Fee',
              description: 'Processing fee for your loan application',
            },
            unit_amount: application.loanAmount * 100, // in cent
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}?session_id={CHECKOUT_SESSION_ID}`, // URL успешной оплаты
      cancel_url: `${process.env.FRONTEND_URL}/cancel`, // URL отмены
      metadata: { applicationId }, // Добавляем applicationId в метаданные
    });

    res.json({ url: session.url }); // Возвращаем URL для перехода на Stripe Checkout
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).send({ error: 'Failed to create Stripe session' });
  }
});

app.get('/handle-success', async (req, res) => {
  const sessionId = req.query.session_id;

  if (!sessionId) {
    return res.status(400).send({ error: 'Session ID is required' });
  }

  try {
    // Получаем данные о сессии из Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Извлекаем applicationId из метаданных
    const applicationId = session.metadata.applicationId;

    // Найти заявку в базе данных
    const application = await Application.findByPk(applicationId);
console.error(application);
    if (!application) {
      return res.status(404).send({ error: 'Application not found' });
    }

    // Обновить статус заявки (например, пометить как оплаченную)
    application.isPaid = true; // Добавьте поле `isPaid` в модель Application
    await application.save();

    console.log(`Payment successful for application ID: ${applicationId}`);

    // Перенаправляем на фронтенд (например, на страницу успеха)
    res.redirect(`${process.env.FRONTEND_URL}/?step=7&applicationId=${applicationId}`);
  } catch (error) {
    console.error('Error handling success:', error);
    res.status(500).send({ error: 'Failed to handle success' });
  }
});



//server 
const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`${PORT}` );
});