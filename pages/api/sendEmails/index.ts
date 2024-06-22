// pages/api/sendEmails.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
require('dotenv').config()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phone, comment } = req.body;

        try {
            // Configuración del transportador de Nodemailer
            const transporter = nodemailer.createTransport({
                host: 'mail.rosari-construction.com',
                port: 465,
                secure: true, // true para el puerto 465
                auth: {
                    user: process.env.SMTP_USER, // Coloca tus credenciales aquí
                    pass: process.env.SMTP_PASS,
                },
            });

            // Configuración del correo electrónico
            const mailOptions = {
                from: 'rosariconstruction@rosari-construction.com',
                to: 'stalin@rosari-construction.com, estefania@rosari-construction.com',
                subject: 'New Contact Form Submission',
                html: `<p><strong>Name:</strong> ${name}</p>
                       <p><strong>Email:</strong> ${email}</p>
                       <p><strong>Phone:</strong> ${phone}</p>
                       <p><strong>Comment:</strong> ${comment}</p>`,
            };

            // Enviar el correo electrónico
            await transporter.sendMail(mailOptions);

            return res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
