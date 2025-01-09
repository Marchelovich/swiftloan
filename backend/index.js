require('dotenv').config();
require('./emailScheduler');

const express = require('express');
const cors = require('cors');
const Application = require('./models/Application');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type'], 
}));

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
 console.log(flattenedData);
   
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

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`${PORT}` );
});