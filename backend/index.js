require('dotenv').config();

const express = require('express');
const cors = require('cors');
const Application = require('./models/Application');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Разрешить только фронтенд на этом порту
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
  allowedHeaders: ['Content-Type'], // Разрешенные заголовки
}));

app.get('/', async (req, res) => {
  res.send("kek");
});

app.post('/submit-application', async (req, res) => {
  try {
    const applicationData = req.body;

    const flattenedData = {
      ...applicationData.loanDetails,
      ...applicationData.personalInfo,
      ...applicationData.residentialInfo,
      ...applicationData.revenueInfo,
      ...applicationData.paymentInfo,
    };

    if (
      flattenedData.birthYear &&
      flattenedData.birthMonth &&
      flattenedData.birthDay
    ) {
      flattenedData.birth = `${flattenedData.birthYear}-${String(
        flattenedData.birthMonth
      ).padStart(2, '0')}-${String(flattenedData.birthDay).padStart(2, '0')}`;
      
      // Удаляем исходные поля, чтобы не было конфликтов
      delete flattenedData.birthYear;
      delete flattenedData.birthMonth;
      delete flattenedData.birthDay;
    }

    // console.log(flattenedData);

    // Сохранение данных в базу
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

  
// Запуск сервера
const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`${PORT}` );
});