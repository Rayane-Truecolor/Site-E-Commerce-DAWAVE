import { Row, Col } from 'react-bootstrap'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'
import { getError } from '../utils'
import gopro from '/images/gopro.mp4'
import Card from '../components/Card'
import Carousele from '../components/Carousel'
import Carousele2 from '../components/Carousel2'
import AutoLayoutSizingExample from '../components/GridReseauSociaux'

export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{getError(error)}</MessageBox>
      ) : (
        <>
          <div className="hero">
            <video src={gopro} autoPlay loop muted />

            <div className="content">
              <h1 className="logo">da'wave! club</h1>
              <p>Do it with style</p>
              <a href="lien-vers-la-page-d-inscription" className="button">
                Inscris toi gratuitement, profite de -10% sur ta commande
              </a>
            </div>
          </div>

          <div className=" sousTitre fw-bold fs-2 text-center m-5">
            Suggestions
          </div>

          <Card />
          <Carousele />
          <Carousele2 />

          <div className=" sousTitre fw-bold fs-2 text-center m-5">
            Suggestions
          </div>

          <Row className="justify-content-center">
            <Helmet>
              <title>Da'Wave</title>
            </Helmet>
            {products!.map((product) => (
              <Col key={product.slug} sm={3} md={2} lg={2}>
                <ProductItem product={product} />
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            <Helmet>
              <title>Da'Wave</title>
            </Helmet>
            {products!.map((product) => (
              <Col key={product.slug} sm={6} md={2} lg={2}>
                <ProductItem product={product} />
              </Col>
            ))}
          </Row>

          <div className=" sousTitre fw-bold fs-2 text-center m-5">
            Suivez-nous
            <p>Identifiez-nous, on partage vos meilleurs looks !</p>
          </div>
          <AutoLayoutSizingExample />
        </>
      )}
    </>
  )
}
