import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import MessageBox from '../components/MessageBox';
import { faCirclePlus, faMinusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartPageWithPromo() {
  const navigate = useNavigate();
  const { state: { mode, cart: { cartItems } }, dispatch } = useContext(Store);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  const updateCartHandler = async (item, quantity) => {
    if (item.countInStock < quantity) {
      toast.warn('Sorry. Product is out of stock');
      return;
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        ...item,
        quantity,
      },
    });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const applyPromoCode = () => {
    if (promoCode === 'surf5') {
      if (!promoApplied) {
        // Réduction de 5% sur le total du panier
        const discount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.05;
        dispatch({ type: 'APPLY_PROMO', payload: discount });
        setPromoApplied(true);
        toast.success('Promo code applied successfully!');
      } else {
        toast.warn('Promo code already applied!');
      }
    } else {
      toast.error('Invalid promo code!');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Panier</title>
      </Helmet>
      <h1>Panier</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              La carte est vide <Link to="/">Aller à la boutique</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>
                      <span>Voir l'article : {' '}<Link to={`/product/${item.slug}`}>{item.name}</Link></span>
                    </Col>
                    <Col md={3}>
                      <span>
                        Quantité:
                        <Button
                          onClick={() =>
                            updateCartHandler(item, item.quantity - 1)
                          }
                          variant={mode}
                          disabled={item.quantity === 1}
                        >
                          <FontAwesomeIcon icon={faMinusCircle}/>
                        </Button>{' '}
                        <span>{item.quantity}</span>
                        <Button
                          variant={mode}
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1)
                          }
                          disabled={item.quantity === item.countInStock}
                        >
                          <FontAwesomeIcon icon={faCirclePlus} />
                        </Button>
                      </span>
                      <br />
                      <span>
                        Prix à l'unité:
                        <Col md={3}>${item.price}</Col>
                      </span>
                      <br />
                      <Col md={2}>
                        <span>Supprimer :</span>
                        <Button onClick={() => removeItemHandler(item)} variant={mode}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Col>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Sous- total ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    produit) : $
                    {promoApplied
                      ? (cartItems.reduce((a, c) => a + c.price * c.quantity, 0) * 0.95).toFixed(2)
                      : cartItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Payer
                    </Button>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="info"
                      onClick={applyPromoCode}
                      disabled={cartItems.length === 0 || promoApplied}
                    >
                      Appliquer code promo
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartPageWithPromo;