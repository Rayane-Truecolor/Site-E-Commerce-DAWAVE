
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useGetProductsQuery } from '../hooks/productHooks'
import { getError } from '../utils'
import gopro from '/images/gopro.mp4'
import Card from '../components/Card'
import Carousele from '../components/Carousel'
import Carousele2 from '../components/Carousel2'
import AutoLayoutSizingExample from '../components/GridReseauSociaux'



export default function HomePage() {
  const { isLoading, error } = useGetProductsQuery()

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
              <a href="/signup" className="button">
                Inscris toi gratuitement, profite de -5% sur ta commande
              </a>
            </div>
          </div>

          <div className=" sousTitre fw-bold fs-2 text-center m-5">
            Suggestions
          </div>

          <Card />
          <Carousele />
          <Carousele2 />

      

          
          <AutoLayoutSizingExample />
        </>
      )}
    </>
  )
}
