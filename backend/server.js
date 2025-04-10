const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');  // Import CORS
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;  // Use the port from the environment or default to 5000

// Configure CORS to allow credentials and specific origin
app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from your frontend's origin
    credentials: true,               // Allow credentials like cookies, authentication headers
}));

app.use(express.json());

// Route to handle the form submission and email sending
const sendEmail = async (req, res) => {
    const { name, email, address, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.SMTP_USERNAME, // To your email
        subject: 'New Contact Form Submission',
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to send email' });
    }
};

// Route to handle form submission
app.post('/send-email', sendEmail);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
