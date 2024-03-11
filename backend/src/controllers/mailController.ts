import { Request, Response } from 'express';
import nodemailer, { SendMailOptions } from 'nodemailer';

export const sendEmail = (req: Request, res: Response) => {
  const { prenom, nom, age, email, message } = req.body;

  // Configurer le service d'envoi d'e-mails (par exemple, Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'votre_adresse_email@gmail.com',
      pass: 'votre_mot_de_passe',
    },
  });

  // Options de l'e-mail
  const mailOptions: SendMailOptions = {
    from: 'votre_adresse_email@gmail.com',
    to: 'hassaine.ray@gmail.com', // Adresse e-mail de destination
    subject: `Nouveau message de ${prenom} ${nom}`,
    text: `
      Nom: ${nom}
      Prénom: ${prenom}
      Âge: ${age}
      Email: ${email}

      Message:
      ${message}
    `,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('E-mail envoyé avec succès:', info.response);
      res.status(200).send('E-mail envoyé avec succès');
    }
  });
  
};
