// app.test.ts
import request from 'supertest';
import app from './index'; // Importez l'application depuis index.ts

describe('Test de l\'utilisation de productRouter', () => {
  it('doit utiliser productRouter pour la route /api/products', async () => {
    // Utilisez supertest pour faire une demande à votre application
    const response = await request(app).get('/api/products');
    // Vérifiez que le statut de la réponse est 200 (OK)
    expect(response.status).toBe(200);
    // Vous pouvez également ajouter d'autres vérifications sur la réponse si nécessaire
  }, 6000);
});