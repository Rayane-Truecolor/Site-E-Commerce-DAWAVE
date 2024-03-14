import React, { useState } from 'react';
import { useGetProductsQuery } from '../hooks/productHooks';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify'; // Import de react-toastify

const AdminUpdatePage: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [updatedProduct, setUpdatedProduct] = useState<UpdatedProduct>({});
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  interface UpdatedProduct {
    name?: string;
    slug?: string;
    image?: string;
    brand?: string;
    category?: string;
    category2?: string;
    price?: number;
    countInStock?: number;
    rating?: number;
    numReviews?: number;
    description?: string;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUpdatedProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = async (productId: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
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
  if (!products) return <div>Aucun produit trouvé</div>;
  
  return (
    <div>
      {products.map((product, index) => (
        <div className="workout-details" key={index}>
          {selectedProductId === product._id ? (
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nom</Form.Label>
                
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Entrez le nom"
                  value={updatedProduct.name || product.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formSlug">
                <Form.Label>Slug</Form.Label>
                <Form.Control
                  type="text"
                  name="slug"
                  placeholder="Entrez le slug"
                  value={updatedProduct.slug || product.slug}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Entrez l'URL de l'image"
                  value={updatedProduct.image || product.image}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBrand">
                <Form.Label>Marque</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  placeholder="Entrez la marque"
                  value={updatedProduct.brand || product.brand}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCategory">
                <Form.Label>Catégorie</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  placeholder="Entrez la catégorie"
                  value={updatedProduct.category || product.category}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCategory2">
                <Form.Label>Deuxième catégorie</Form.Label>
                <Form.Control
                  type="text"
                  name="category2"
                  placeholder="Entrez la deuxième catégorie"
                  value={updatedProduct.category2 || product.category2}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Entrez le prix"
                  value={updatedProduct.price || product.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCountInStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  name="countInStock"
                  placeholder="Entrez la quantité en stock"
                  value={updatedProduct.countInStock || product.countInStock}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formRating">
                <Form.Label>Évaluation</Form.Label>
                <Form.Control
                  type="number"
                  name="rating"
                  placeholder="Entrez l'évaluation"
                  value={updatedProduct.rating || product.rating}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formNumReviews">
                <Form.Label>Nombre d'avis</Form.Label>
                <Form.Control
                  type="number"
                  name="numReviews"
                  placeholder="Entrez le nombre d'avis"
                  value={updatedProduct.numReviews || product.numReviews}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  placeholder="Entrez la description"
                  value={updatedProduct.description || product.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" onClick={() => handleUpdate(product._id)}>
                Mettre à jour
              </Button>
            </Form>
          ) : (
            <>
              <h4>{product.name}</h4>
                            <h4>{product.slug}</h4>

              <Button variant="info" onClick={() => setSelectedProductId(product._id)}>Modifier</Button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminUpdatePage;
