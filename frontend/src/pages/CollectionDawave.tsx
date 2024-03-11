import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ProductItem from '../components/ProductItem';
import { useGetProductsQuery } from '../hooks/productHooks';
import { getError } from '../utils';

export default function CollectionDawave() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <div className="background-collectiondawave">
        {isLoading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{getError(error)}</MessageBox>
        ) : (
          <>
            <div>
              <div className="sousTitre fw-bold fs-2 text-center m-5">
                Nouvelle collection Da'Wave!
              </div>
            </div>
            <Row className="justify-content-center">
              <Helmet>
                <title>Da'Wave</title>
              </Helmet>

              {products!
                .filter((product) => product.category === 'Planche')
                .map((product) => (
                  <Col key={product.slug} sm={6} md={2} lg={2}>
                    <ProductItem product={product} />
                  </Col>
                ))}
            </Row>
          </>
        )}
      </div>
    </>
  );
}
