const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Root route for testing the server
app.get('/', (req, res) => {
  res.send('Welcome to the Quotation API');
});

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'glorioustextile225@gmail.com', // replace with your email
    pass: 'Glorious@12', // replace with your email password
  },
});

// Endpoint to send email
app.post('/send-email', (req, res) => {
  const { email, description } = req.body;

  const mailOptions = {
    from: email,
    to: 'glorioustextile225@gmail.com',
    subject: 'Quotation Request',
    text: description,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${5000}`);
});
