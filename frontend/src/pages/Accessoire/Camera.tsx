import { Col, Row } from 'react-bootstrap'
import { useGetProductsQuery } from '../../hooks/productHooks'
import ProductItem from '../../components/ProductItem'
import LoadingBox from '../../components/LoadingBox'
import MessageBox from '../../components/MessageBox'
import { getError } from '../../utils'
import { Helmet } from 'react-helmet-async'

export default function Camera() {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{getError(error)}</MessageBox>
      ) : (
        <>
        
          <div>
            <div className=" sousTitre fw-bold fs-2 text-center m-5">
              Camera
            </div>
          </div>
          <Row className="justify-content-center">
            <Helmet>
              <title>Da'Wave</title>
            </Helmet>

            {products!
              .filter((product) => product.category === 'Camera')
              .map((product) => (
                <Col key={product.slug} sm={6} md={2} lg={2}>
                  <ProductItem product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  )
}
