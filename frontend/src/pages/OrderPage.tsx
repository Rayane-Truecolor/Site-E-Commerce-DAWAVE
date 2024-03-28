import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {ApiError} from '../types/ApiError'
import { getError } from '../utils'
import {
    PayPalButtons,
    PayPalButtonsComponentProps,
    SCRIPT_LOADING_STATE,
    usePayPalScriptReducer,
  } from '@paypal/react-paypal-js'
  import { useEffect } from 'react'
  import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
  import { toast } from 'react-toastify'
  import {useGetOrderDetailsQuery, useGetPaypalClientIdQuery, usePayOrderMutation,} from '../hooks/orderHooks'
export default function OrderPage() {
  
  

  const params = useParams()
  const { id: orderId } = params

  const {
    data: order,
    isLoading,
    error,
    refetch,
  } = useGetOrderDetailsQuery(orderId!)

  const { mutateAsync: payOrder, isPending : loadingPay } = usePayOrderMutation()

  const testPayHandler = async () => {
    await payOrder({ orderId: orderId! })
    refetch()
    toast.success('Order is paid')
  }

  const [{ isPending, isRejected }, paypalDispatch] = usePayPalScriptReducer()

  const { data: paypalConfig } = useGetPaypalClientIdQuery()

  useEffect(() => {
    if (paypalConfig && paypalConfig.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'clientId': paypalConfig!.clientId,
            currency: 'USD',
          },
        })
        paypalDispatch({
          type: 'setLoadingStatus',
          value: SCRIPT_LOADING_STATE.PENDING,
        })
      }
      loadPaypalScript()
    }
  }, [paypalConfig, paypalDispatch]) // Ajouter paypalDispatch dans le tableau des dépendances
  

  const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
    style: { layout: 'vertical' },
    createOrder(_, actions) {
      return actions.order
        .create({
          intent: 'CAPTURE', // Ajoutez la propriété intent
          purchase_units: [
            {
              amount: {
                currency_code: 'USD', // Ajoutez la propriété currency_code
                value: order!.totalPrice.toString(),
              },
            },
          ],
        })
        .then((orderID: string) => {
          return orderID;
        });
    },
    
    onApprove(_, actions) {
      return actions.order!.capture().then(async (details) => {
        try {
          await payOrder({ orderId: orderId!, ...details });
          refetch();
          toast.success('Order is paid successfully');
        } catch (err) {
          toast.error(getError(err as ApiError));
        }
      });
    },
    onError: (err) => {
      toast.error(getError(err as ApiError));
    },
  };
  
  return isLoading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{getError(error)}</MessageBox>
  ) : !order ? (
    <MessageBox variant="danger">Commande non trouvé</MessageBox>
  ) : (
    <div>
      <Helmet>
        <title>Commande {orderId}</title>
      </Helmet>
      <h1 className="my-3">Commande {orderId}</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Livraison</Card.Title>
              <Card.Text>
                <strong>Nom:</strong> {order.shippingAddress.fullName} <br />
                <strong>Adresse: </strong> {order.shippingAddress.address},
                {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                ,{order.shippingAddress.country}
              </Card.Text>
              {order.isDelivered ? (
                <MessageBox variant="success">
                  Delivré à : {order.deliveredAt}
                </MessageBox>
              ) : (
                <MessageBox variant="warning">Not Delivered</MessageBox>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Payement</Card.Title>
              <Card.Text>
                <strong>Methode:</strong> {order.paymentMethod}
              </Card.Text>
              {order.isPaid ? (
                <MessageBox variant="success">
                  payé a {order.paidAt}
                </MessageBox>
              ) : (
                <MessageBox variant="warning">Not Paid</MessageBox>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Items</Card.Title>
              <ListGroup variant="flush">
                {order.orderItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded thumbnail"
                        ></img>{' '}
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>${item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Résumé de commande</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Produits</Col>
                    <Col>${order.itemsPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Livraison</Col>
                    <Col>${order.shippingPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Taxe</Col>
                    <Col>${order.taxPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Total</strong>
                    </Col>
                    <Col>
                      <strong>${order.totalPrice.toFixed(2)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {!order.isPaid && (
                  <ListGroup.Item>
                    {isPending ? (
                      <LoadingBox />
                    ) : isRejected ? (
                      <MessageBox variant="danger">
                        Error de connexion Paypal
                      </MessageBox>
                    ) : (
                      <div>
                        <PayPalButtons
                          {...paypalbuttonTransactionProps}
                        ></PayPalButtons>
                        <Button onClick={testPayHandler}>Test de payement</Button>
                      </div>
                    )}
                    {loadingPay && <LoadingBox></LoadingBox>}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}