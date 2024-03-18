import React from 'react';
import { useGetProductsQuery } from '../hooks/productHooks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Button } from 'react-bootstrap';

const AdminDeletePage: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  const handleClick = async (productId: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/products/${productId}`, {
        method: 'DELETE',
      }
      );

      if (!response.ok) {
        throw new Error('La requête de suppression a échoué');
      }

      // Suppression réussie, peut-être mettre à jour l'état ou effectuer d'autres actions nécessaires
      window.location.reload();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Erreur lors de la requête de suppression :', error);
        toast.error(error.message || 'Une erreur inconnue s\'est produite');
      } else {
        console.error('Erreur inconnue lors de la requête de suppression');
        toast.error('Une erreur inconnue s\'est produite');
      }
    }
  };
  if (isLoading) return <div>Chargement en cours...</div>;
  if (isError) return <div>Une erreur s'est produite lors du chargement des produits</div>;
  if (!products) return <div>Aucun produit trouvé</div>; // Vérification de nullité ou d'undefined

  return (
    <div>
      {products.map((product, index) => (
        <Card className="workout-details" key={index}>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <strong>Nom : </strong>{product.name}
            </Card.Text>
            <Card.Text>
              <strong>Slug : </strong>{product.slug}
            </Card.Text>
            <Button variant="danger" onClick={() => handleClick(product._id)}>Supprimer</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AdminDeletePage;
