import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAddPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [category2, setCategory2] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [countInStock, setCountInStock] = useState<number>(0);
  const [brand, setBrand] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [numReviews, setNumReviews] = useState<number>(0);
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        body: JSON.stringify({
          name,
          slug,
          image,
          category,
          category2,
          price,
          discount,
          countInStock,
          brand,
          rating,
          numReviews,
          description,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la soumission du produit');
      }

      const result = await response.json();
      localStorage.setItem('newProduct', JSON.stringify(result));
      console.log('Nouveau produit ajouté', result);

      // Affichage de la notification de succès
      toast.success('Produit ajouté avec succès !');

      // Rechargement de la page pour afficher le nouveau produit
      window.location.reload();
    } catch (error: unknown) {
      if (error instanceof Error && typeof error.message === 'string') {
        console.error('Erreur lors de la soumission du produit :', error);
        // Affichage de la notification d'erreur avec le message
        toast.error(error.message || 'Une erreur s\'est produite');
      } else {
        console.error('Erreur lors de la soumission du produit :', error);
        // Affichage de la notification d'erreur générique
        toast.error('Une erreur s\'est produite');
      }
    }
  };
  
  return (
    <div>
      <h2 className="text-center">Ajouter un Produit</h2>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSlug">
          <Form.Label>Slug</Form.Label>
          <Form.Control type="text" name="slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
      <Form.Label>Image</Form.Label>
      <Form.Control type="file" name="image" onChange={(e) => setImage(e.target.value)} />
      {/* Affiche le nom du fichier sélectionné */}
      {image && <p>Nom du fichier : {image}</p>}
    </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Catégorie</Form.Label>
          <Form.Control type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory2">
          <Form.Label>Catégorie 2</Form.Label>
          <Form.Control type="text" name="category2" value={category2} onChange={(e) => setCategory2(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Prix</Form.Label>
          <Form.Control type="number" name="price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDiscount">
          <Form.Label>Réduction</Form.Label>
          <Form.Control type="number" name="discount" value={discount} onChange={(e) => setDiscount(parseFloat(e.target.value))} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formStock">
          <Form.Label>Stock</Form.Label>
          <Form.Control type="number" name="countInStock" value={countInStock} onChange={(e) => setCountInStock(parseFloat(e.target.value))}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBrand">
          <Form.Label>Marque</Form.Label>
          <Form.Control type="text" name="brand" value={brand}onChange={(e) => setBrand(e.target.value)}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRating">
          <Form.Label>Évaluation</Form.Label>
          <Form.Control type="number" name="rating" value={rating} onChange={(e) => setRating(parseFloat(e.target.value))}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumReviews">
          <Form.Label>Nombre d'avis</Form.Label>
          <Form.Control type="number" name="numReviews" value={numReviews} onChange={(e) => setNumReviews(parseFloat(e.target.value))}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={description} onChange={(e) => setDescription(e.target.value)}  />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ajouter Produit
        </Button>
      </Form>
    </div>
  );
};

export default AdminAddPage;
