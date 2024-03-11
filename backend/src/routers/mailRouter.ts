import express from 'express';
import { sendEmail } from '../controllers/mailController'; // Assurez-vous de spécifier le bon chemin vers votre contrôleur d'e-mails

const router = express.Router();

// Définition de la route POST pour l'envoi d'e-mails
router.post('/send-email', sendEmail);

export default router;
