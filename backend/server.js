const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// GET endpoint to test if server is running
app.get('/', (req, res) => {
  res.json({ message: 'CloudBlogger API is running!' });
});

// GET endpoint to test API health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is healthy' });
});

// GET endpoint to test if server is running
app.get('/', (req, res) => {
  res.json({ message: 'CloudBlogger API is running!' });
});

// GET endpoint to test API health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is healthy' });
});

// POST endpoint to receive form data and send email
app.post('/api/send-demo-email', async (req, res) => {
  const { user_name, user_email, user_phone, preferred_date } = req.body;

  // Format preferred_date if present
  let dateLine = '';
  if (preferred_date) {
    dateLine = `Preferred Date: ${preferred_date}\n`;
  }

  // Configure your SMTP transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'joincloudblogger@gmail.com',
      pass: 'abjekukosnmibmif',
    },
  });

  // Email to admin (plain text)
  const mailOptions = {
    from: 'joincloudblogger@gmail.com',
    to: 'joincloudblogger@gmail.com',
    subject: 'New Demo Booking',
    text: `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone}\n${dateLine}`,
  };

  // Confirmation email to user (HTML, text only, personalized)
  const userMailOptions = {
    from: 'joincloudblogger@gmail.com',
    to: user_email,
    subject: 'Demo Booking Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; color: #222;">
        <p>Hello ${user_name},</p>
        <p>Thank you for booking a demo with us!<br>
        We've received your request and will be in touch shortly to schedule the session.<br>
        Looking forward to connecting with you soon.</p>
        <br>
        <p>Best Regards,<br>
        <b>Gaurav Tevathiya | AI Architect</b><br>
        Cloud Blogger</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

// POST endpoint to receive enroll now form data and send emails
app.post('/api/enroll-now', async (req, res) => {
  const { user_name, user_email, user_phone, preferred_course } = req.body;

  // Configure your SMTP transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'joincloudblogger@gmail.com',
      pass: 'abjekukosnmibmif',
    },
  });

  // Email to admin (plain text)
  const mailOptions = {
    from: 'joincloudblogger@gmail.com',
    to: 'joincloudblogger@gmail.com',
    subject: 'New Enrollment',
    text: `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone}\nPreferred Course: ${preferred_course || 'Powerful Devops Course'}`,
  };

  // Confirmation email to user (HTML, text only, personalized, updated text)
  const userMailOptions = {
    from: 'joincloudblogger@gmail.com',
    to: user_email,
    subject: 'Enrollment Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; color: #222;">
        <p>Hello ${user_name},</p>
        <p>Thank you for enrolling with us!<br>
        We've received your request and will be in touch shortly to schedule the session.<br>
        Looking forward to connecting with you soon.</p>
        <br>
        <p>Best Regards,<br>
        <b>Gaurav Tevathiya | AI Architect</b><br>
        Cloud Blogger</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);
    res.status(200).json({ message: 'Enrollment email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send enrollment email', error });
  }
});

// POST endpoint to receive consultation form data and send emails
app.post('/api/consultation', async (req, res) => {
  const { first_name, last_name, user_email, preferred_course } = req.body;

  // Configure your SMTP transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'joincloudblogger@gmail.com',
      pass: 'abjekukosnmibmif',
    },
  });

  // Email to admin (plain text)
  const mailOptions = {
    from: 'joincloudblogger@gmail.com',
    to: 'joincloudblogger@gmail.com',
    subject: 'New Consultation Request',
    text: `Name: ${first_name} ${last_name}\nEmail: ${user_email}\nPreferred Course: ${preferred_course || 'Not specified'}`,
  };

  // Confirmation email to user (HTML, text only, personalized)
  const userMailOptions = {
    from: 'joincloudblogger@gmail.com',
    to: user_email,
    subject: 'Consultation Request Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; color: #222;">
        <p>Hello ${first_name},</p>
        <p>Thank you for requesting a consultation with us!<br>
        We've received your request and will be in touch shortly to schedule the session.<br>
        Looking forward to connecting with you soon.</p>
        <br>
        <p>Best Regards,<br>
        <b>Gaurav Tevathiya | AI Architect</b><br>
        Cloud Blogger</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);
    res.status(200).json({ message: 'Consultation email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send consultation email', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 