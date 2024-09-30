const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-quotation', (req, res) => {
  const { email, description } = req.body;

  // Set up Nodemailer transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',  // You can use other services like Outlook, etc.
    auth: {
      user: 'your-email@gmail.com',  // Replace with your email
      pass: 'your-email-password',   // Replace with your email password or app-specific password
    },
  });

  // Set up email data
  let mailOptions = {
    from: email, // Sender's email
    to: 'info@gloriousfabric.lk', // Recipient email
    subject: 'Quotation Request',
    text: `You have received a new quotation request.\n\nEmail: ${email}\nDescription: ${description}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email', error });
    }
    res.status(200).send({ message: 'Email sent successfully', info });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
