import { Carousel, Stack, Col, Row, Card } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { Store } from '../Store';
import ProductItem from './ProductItem';
import { useGetProductsQuery } from '../hooks/productHooks';

export default function Carousel2() {
  const { state: { mode } } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);

  const { data: products } = useGetProductsQuery();

  return (
   
    <div className="sousTitre text-center fs-2 my-5 fw-bold">
      <h1 className="sousTitre text-center fs-2 my-5 fw-bold">
        Les meilleurs notes
      </h1>
      <div className="bg-opacity-25 container-fluid">
        <Carousel style={{ height: 500 }} interval={1000}> {/* interval={3000} définit un intervalle de 3 secondes */}
          <Carousel.Item className="d-flex justify-content-center align-items-center">
            <Card>
              <Card.Body>
                <Stack direction="horizontal">
                  <Row xs={2} md={3} lg={5} className="justify-content-center">
                    {products
                      ?.filter((product) => product.category === 'Planche' && product.rating > 4)
                      .slice(0, 5) // Limiter à 5 produits au maximum
                      .map((product) => (
                        <Col key={product.slug} sm={6} md={2} lg={2}>
                          <ProductItem product={product} />
                        </Col>
                      ))}
                  </Row>
                </Stack>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
