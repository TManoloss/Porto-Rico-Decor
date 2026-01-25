'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, message: 'Por favor, preencha todos os campos obrigatórios.' };
    }

    // Create a transporter using SMTP credentials from environment variables
    // If variables are not set, this will fail gracefully or log an error
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.example.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER || 'user@example.com',
            pass: process.env.SMTP_PASS || 'password',
        },
    });

    try {
        // Send email
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER || email}>`, // Sender address
            to: process.env.SMTP_TO || 'contato@portoricodecor.com, portoricodecor@hotmail.com', // List of receivers
            replyTo: email,
            subject: `Novo contato pelo site: ${name}`, // Subject line
            text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        
        Mensagem:
        ${message}
      `, // plain text body
            html: `
        <h3>Novo contato pelo site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `, // html body
        });

        return { success: true, message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde ou entre em contato pelo WhatsApp.' };
    }
}
