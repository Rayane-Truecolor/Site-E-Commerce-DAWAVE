import React, { useState } from 'react';
import { useGetUsersQuery } from '../hooks/userModify';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify'; // Import de react-toastify

const UserModifier: React.FC = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [updatedUser, setUpdatedUser] = useState<UpdatedUsers>({
    name: '',
    email: '',
    password: '',
    token: '',
    isAdmin: false
  });

  interface UpdatedUsers {
    name: string
    email: string
    password: string
    token: string
    isAdmin: boolean
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUpdatedUser((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleUpdate = async (userId: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error('La requête de mise à jour a échoué');
      }

      // Mise à jour réussie, afficher une notification
      toast.success('Produit mis à jour avec succès !');

      // Recharger la page pour afficher les données mises à jour
      window.location.reload();
    } catch (error) {
      console.error('Erreur lors de la requête de mise à jour :', error);
      // Afficher une notification en cas d'erreur
      toast.error('Erreur lors de la mise à jour du produit');
    }
  };

  if (isLoading) return <div>Chargement en cours...</div>;
  if (isError) return <div>Une erreur s'est produite lors du chargement des produits</div>;
  if (!users) return <div>Aucun produit trouvé</div>;

  return (
    <div>
      {users.map((user, index) => (
        <div className="workout-details" key={index}>
          {selectedUserId === user._id ? (
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nom</Form.Label>
                
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Entrez le nom"
                  value={updatedUser.name || user.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formSlug">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Entrez l'email"
                  value={updatedUser.email || user.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Entrez l'URL de l'image"
                  value={updatedUser.password || user.password}
                  onChange={handleChange}
                />
              </Form.Group>
             
              <Button variant="primary" onClick={() => handleUpdate(user._id)}>
                Mettre à jour
              </Button>
            </Form>
          ) : (
            <>
              <h4>{user.name}</h4>
                            <h4>{user.email}</h4>

              <Button variant="info" onClick={() => setSelectedUserId(user._id)}>Modifier</Button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserModifier;
