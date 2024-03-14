import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import path from 'path'

import { productRouter } from './routers/productRouter'
import { seedRouter } from './routers/seedRouter'
import { userRouter } from './routers/userRouter'
import emailRoutes from './routers/mailRouter';
import session, { SessionData } from 'express-session';
import svgCaptcha from 'svg-captcha';
import { ProductModel } from './models/productModel';
import { UserModel } from './models/userModel';



dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/tsthewavedb'
mongoose.set('strictQuery', true)
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(() => {
    console.log('error mongodb')
  })

const app = express()
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/seed', seedRouter)
app.use(emailRoutes);

interface CustomSessionData extends SessionData {
  captcha?: string;
}
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


app.post('/api/products', async function (req: express.Request, res: express.Response) {
  // Créez une nouvelle instance de ProductModel avec les données du corps de la requête
  const product = new ProductModel(req.body);
  try {
    // Enregistrez le nouveau produit dans la base de données
    const result = await product.save();
    // Répondez avec le produit sauvegardé
    res.send(result); 
  } catch (error) {
    // Gérez les erreurs éventuelles
    if (error instanceof Error) { // Vérifiez si "error" est une instance de l'objet "Error"
      res.status(400).send(error.message);
    } else {
      res.status(500).send('Une erreur inattendue s\'est produite');
    }
  }
});

// Route DELETE pour supprimer un produit

app.delete('/api/products/:productId', async (req, res) => {
  const productId = req.params.productId;

  try {
    // Supprimer le produit de la base de données en utilisant l'ID spécifié
    await ProductModel.deleteOne({ public_id: productId }).exec();
    res.status(200).json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du produit :', error);
    res.status(500).json({ error: 'Erreur lors de la suppression du produit' });
  }
});




app.put('/api/users/:userId', async function (req: express.Request, res: express.Response) {
  const userId = req.params.userId;
  const updatedUserData = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedUserData, { new: true });
    res.json(updatedUser);
  } catch (error) {
    // Gérez les erreurs éventuelles
    console.error('Erreur lors de la mise à jour de user :', error);
      res.status(500).send('Erreur lors de la mise à jour du user');
  }
});

app.put('/api/products/:productId', async (req, res) => {
  const productId = req.params.productId;
  const updatedProductData = req.body;

  try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(productId, updatedProductData, { new: true });
      res.json(updatedProduct);
  } catch (error) {
      console.error('Erreur lors de la mise à jour du produit :', error);
      res.status(500).send('Erreur lors de la mise à jour du produit');
  }
});



app.use(express.static(path.join(__dirname, '../../frontend/dist')))
app.get('*', (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
)

const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})



export default app;