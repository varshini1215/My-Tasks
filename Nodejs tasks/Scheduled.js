const cron = require('node-cron');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});


const sendEmail = async () => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: 'Scheduled Email Notification',
    text: 'This is a scheduled email notification sent by your Node.js app!'
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


cron.schedule('* * * * *', () => {
  console.log('Running cron job to send email');
  sendEmail();
});


cron.schedule('0 * * * *', () => {
  console.log('Running cron job every hour');
});


cron.schedule('0 0 * * *', () => {
  console.log('Running cron job at midnight');
});

console.log('Cron jobs scheduled. Application is running.');
