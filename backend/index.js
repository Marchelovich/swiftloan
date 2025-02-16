require('dotenv').config();
require('./emailScheduler');

const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const Application = require('./models/Application');
const multer = require('multer');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Инициализация Stripe SDK
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors({
  //origin: process.env.FRONTEND_URL, // Разрешить только фронтенд на этом порту
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
  allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
}));

// Middleware to set headers for every response
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigins = [
    'https://swiftloan.space/',
    process.env.FRONTEND_URL,
    // другие субдомены
  ];

  if (allowedOrigins.includes(origin)) {
    console.log(123)<
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // Set CORS headers for all responses // Allow frontend domain
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
  res.set('Access-Control-Allow-Credentials', 'true'); // Allow credentials (cookies, etc.)

  // Allow preflight requests to be handled for OPTIONS method
  if (req.method === 'OPTIONS') {
    res.status(204).end(); // No content, but OK response
  } else {
    next(); // Proceed to the next middleware or route
  }
});

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
      host: 'mail.adm.tools', // Replace with your SMTP host
      port: 465, // Port for SSL/TLS
      secure: true, // Use SSL/TLS
      auth: {
        user: process.env.SENDER_EMAIL, // Sender's email
        pass: process.env.SENDER_EMAIL_PASSWORD, // Email password
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

    const customer = await stripe.customers.create({
      email: application.email,
      name: application.first_name + " " + application.last_name,
      metadata: { userId: application.userId },
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer: customer.id,
      line_items: [
        {
          price: process.env.STRIPE_VARIFICATION_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.BACKEND_URL}/handle-success?session_id={CHECKOUT_SESSION_ID}`, // URL успешной оплаты
      cancel_url: `${process.env.FRONTEND_URL}`, // URL отмены
      metadata: { applicationId }, // Добавляем applicationId в метаданные
      payment_intent_data: {
        setup_future_usage: 'off_session', // Настраиваем сохранение карты
      },
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
    const customerId = session.customer;

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

    // Извлекаем ID сохранённого метода оплаты
    const paymentMethodId = session.payment_intent
        ? (await stripe.paymentIntents.retrieve(session.payment_intent)).payment_method
        : null;

    if (!paymentMethodId) {
      throw new Error('No payment method was saved during the checkout session.');
    }

    // Устанавливаем метод оплаты как default для клиента
    await stripe.customers.update(session.customer, {
      invoice_settings: { default_payment_method: paymentMethodId },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [
        {
          price: process.env.STRIPE_SUBSCRIPTION_PRICE_ID, // ID цены
        },
      ],
      trial_end: Math.floor(Date.now() / 1000) + 2 * 24 * 60 * 60 // Trial period ends in 2 days
    });

    console.log(`Payment successful for application ID: ${applicationId}`);
    console.log("Subscriebed");

    // Перенаправляем на фронтенд (например, на страницу успеха)
    res.redirect(`${process.env.FRONTEND_URL}/?step=7&applicationId=${applicationId}`);
  } catch (error) {
    console.error('Error handling success:', error);
    res.status(500).send({ error: 'Failed to handle success' });
  }
});


//server
const PORT = process.env.PORT;
app.listen(PORT, process.env.HOST, () => {
  console.log(`server started ${PORT}` );
});