import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {getError } from '../utils';
import { Row, Col, Badge, Button, Card, ListGroup, Form, Modal } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useContext } from 'react';
import { Store } from '../Store';

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const { data: product, isLoading, error } = useGetProductDetailsBySlugQuery(slug!);
const {} = useContext(Store);
  const [commentsList, setCommentsList] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');
  const [showModal, setShowModal] = useState(false);

  const addToCartHandler = () => {
    // Votre code pour ajouter au panier
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ajouter le commentaire à la liste des commentaires
    setCommentsList([...commentsList, comment]);
    // Réinitialiser le champ de commentaire après soumission
    setComment('');
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error)}</MessageBox>
  ) : !product ? (
    <MessageBox variant="danger">Product Not Found</MessageBox>
  ) : (
    <div>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <Row>
        {/*1éme bloc */}
        <Col md={4}>
          <img
            className="large"
            src={product.image}
            alt={product.name}
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          ></img>
          {/* Modal pour afficher l'image en grand */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
  <Modal.Body>
    <img 
      className="large" 
      src={product.image} 
      alt={product.name} 
    />
  </Modal.Body>
</Modal>
        </Col>

        {/*2éme bloc */}
        <Col md={3}>
          <ListGroup variant="flush">
            {/*Nom des produits */}
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            {/*Notation étoile et review des produits */}
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            </ListGroup.Item>
            {/*Prix des produits */}
            <ListGroup.Item>Prix : ${product.price}</ListGroup.Item>
            {/*Description des produits */}
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/*3éme bloc */}
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Prix:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">En stock</Badge>
                      ) : (
                        <Badge bg="danger">Indisponible</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Ajouter au panier
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Session commentaire */}
      <Row>
        <Col>
          <Form onSubmit={handleCommentSubmit}>
            <Form.Group controlId="comment">
              <Form.Label>Laisser un commentaire</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Affichage des commentaires */}
      <Row>
        <Col>
          <h2>Comments</h2>
          {commentsList.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
        </Col>
      </Row>
    </div>
  );
}