import express from 'express';
import session, { SessionData } from 'express-session';
import svgCaptcha from 'svg-captcha';

// Définition d'un nouveau type de session qui inclut la propriété 'captcha'
interface CustomSessionData extends SessionData {
    captcha?: string;
}

const app = express();

app.use(
    session({
        secret: 'my-secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: {} // Ajoutez un cookie pour éviter les erreurs potentielles dans la configuration de session
    })
);

app.get('/captcha', function (req: express.Request, res: express.Response) {
    const captcha = svgCaptcha.create({
        size: 5,
        noise: 3,
    });
    (req.session as CustomSessionData).captcha = captcha.text; // Utilisation du type CustomSessionData pour annoter le type de req.session
    res.type('svg');
    res.status(200).send(captcha.data);
});

app.post('/verifycaptcha', function (req: express.Request, res: express.Response) {
    const { userInput } = req.body;
    if (userInput === (req.session as CustomSessionData).captcha) { // Utilisation du type CustomSessionData pour annoter le type de req.session
        res.status(200).send('Le captcha est valide !');
    } else {
        res.status(400).send("Le captcha n'est pas valide !");
    }
});