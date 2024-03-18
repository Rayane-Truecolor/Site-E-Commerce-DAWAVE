

// app.test.ts
import request from 'supertest';
import AdminDeleteUser from './AdminDeleteUser'; // Importez l'application depuis index.ts

describe('Test de l\'utilisation de UserRouter', () => {
  it('doit utiliser UserRouter pour la route /api/users', async () => {
    // Utilisez supertest pour faire une demande à votre application
    const response = await request(AdminDeleteUser).get('/api/users');
    // Vérifiez que le statut de la réponse est 200 (OK)
    expect(response.status).toBe(200);
    // Vous pouvez également ajouter d'autres vérifications sur la réponse si nécessaire
  }, 6000);
});