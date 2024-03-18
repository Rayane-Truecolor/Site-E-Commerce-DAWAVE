import React from 'react';
import { useGetUsersQuery } from '../hooks/userModify'; // Importez la fonction useGetUsersQuery depuis le hook userModify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Button } from 'react-bootstrap';

const AdminDeleteUser: React.FC = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery(); // Utilisez la fonction useGetUsersQuery pour récupérer la liste des utilisateurs

  const handledeleteClick = async (userId: string) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/${userId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('La requête de suppression a échoué');
      }

      window.location.reload();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Erreur lors de la requête de suppression :', error);
        toast.error(error.message || "Une erreur inconnue s'est produite");
      } else {
        console.error('Erreur inconnue lors de la requête de suppression');
        toast.error("Une erreur inconnue s'est produite");
      }
    }
  };

  if (isLoading) return <div>Chargement en cours...</div>;
  if (isError)
    return (
      <div>Une erreur s'est produite lors du chargement des utilisateurs</div>
    );
  if (!users) return <div>Aucun utilisateur trouvé</div>;

  return (
    <div>
      {users.map((user, index) => (
        <Card className="user-details" key={index}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              <strong>Nom : </strong>
              {user.name}
            </Card.Text>
            <Card.Text>
              <strong>Email : </strong>
              {user.email}
            </Card.Text>
            <Button
              variant="danger"
              onClick={() => handledeleteClick(user._id)}
            >
              Supprimer
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AdminDeleteUser;
