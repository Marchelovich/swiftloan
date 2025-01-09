require('dotenv').config();

const cron = require('node-cron');
const nodemailer = require('nodemailer');
const Application = require('./models/Application');

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_PASSWORD,
    },
  });

  const sendWeeklyEmails = async () => {
    try {
      const applications = await Application.findAll({
        attributes: ['email', 'firstName', 'lastName'],
      });
  
      if (applications.length === 0) {
        console.log('There are no requests to send letters.');
        return;
      }
  
      console.log(`Found ${applications.length} applications for sending letters.`);
  
      //Email Template
      const emailTemplate = (name) => `
        <h1>Hello, ${name}!</h1>
        <p>Thank you for using our services. This is your weekly notification!</p>
        <p>If you have any questions, please contact us.</p>
        <p>Best regards, the project team!</p>
      `;
  
      for (const application of applications) {
        const { email, firstName, lastName } = application;
        const mailOptions = {
          from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.SENDER_EMAIL}>`,
          to: email, 
          subject: 'Weekly Notification',
          html: emailTemplate(`${firstName} ${lastName}`),
        };
  
        await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${email}`);
      }
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  };
  
  //every Monday at 10:00 a.m
  cron.schedule('0 10 * * 1', sendWeeklyEmails, {
    timezone: process.env.TIMEZONE || 'America/Toronto',
  });
  
  console.log('Email scheduler started...');