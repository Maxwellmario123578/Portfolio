const nodemailer = require('nodemailer');

// Configuration CORS pour Vercel
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  return await fn(req, res);
};

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Tous les champs sont requis',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Email invalide',
    });
  }

  // Configuration du transporteur SMTP avec les variables d'environnement Vercel
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_FROM}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e5543; border-bottom: 3px solid #22c55e; padding-bottom: 10px;">
          Nouveau message depuis votre portfolio
        </h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Nom:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Sujet:</strong> ${subject}</p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #22c55e; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        <div style="text-align: center; color: #888; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p>Ce message a été envoyé depuis votre portfolio</p>
        </div>
      </div>
    `,
    text: `
Nouveau message depuis votre portfolio

Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({
      success: true,
      message: 'Email envoyé avec succès',
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi de l\'email',
      error: error.message,
      details: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER ? 'configuré' : 'manquant',
        pass: process.env.SMTP_PASS ? 'configuré' : 'manquant',
      }
    });
  }
};

module.exports = allowCors(handler);
