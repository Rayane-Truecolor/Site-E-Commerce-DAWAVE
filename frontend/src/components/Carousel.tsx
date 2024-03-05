import { Carousel, Card, Stack} from 'react-bootstrap'
import logo_quicksilver_blanc from '../../public/images/logo/logo_quicksilver_blanc.jpg'
import azeazeaze from '../../public/images/logo/azeazeaze.png'
import ripcurl from '../../public/images/logo/ripcurl.svg'
import logo_oneill_fond_blanc from '../../public/images/logo/logo_oneill_fond_blanc.png'
import firewire_fond_noir from '../../public/images/logo/firewire_fond_noir.png'
import firewire_fond_blanc from '../../public/images/logo/firewire_fond_blanc.png'
import logo_oneill_fond_noir from '../../public/images/logo/logo_oneill_fond_noir.png'
import hurley from '../../public/images/logo/hurley.png'
import logo_hurley_fond_noir from '../../public/images/logo/logo_hurley_fond_noir.png'
import logo_hurley_fond_blanc from '../../public/images/logo/logo_hurley_fond_blanc.png'




import { useContext, useEffect } from 'react';
import { Store } from '../Store';


export default function Carousele() {
  // const { data: reviews, isLoading, refetch } = useQuery("reviews", () =>
  //   fetch("https://.herokuapp.com/reviews").then((res) => res.json())
  // );
  // refetch();
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  const reviews = [
    { _id: 1, text: 'abc' },
    { _id: 2, text: 'def' },
    { _id: 3, text: 'ghi' },
    { _id: 4, text: 'jkl' },
    { _id: 5, text: 'mno' },
    { _id: 6, text: 'pqr' },
    { _id: 7, text: 'stu' },
    { _id: 8, text: 'vwx' },
    { _id: 9, text: 'yza' },
  ]

  const {
    state: { mode},
    dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }



  return (
    <div>
      <h1 className="sousTitre text-center fs-2 my-5 fw-bold">
        Marque populaire ({reviews.length} produits)
      </h1>
      <div className=" bg-opacity-25 container-fluid">
        <Carousel style={{ height: 400 }}>
          {reviews.map(() => (
            <Carousel.Item style={{ height: 400 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={5}
              >
                <Card style={{ width: '24rem', height: '15rem' }}>
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    {/* Remplacer Card.Title par l'image */}
                    <img
                      src={
                        mode === 'dark'
                          ?logo_quicksilver_blanc 
                          : azeazeaze
                      }
                      alt="Femme en hiver"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                      }}
                    />
                    <Card.Title>Quicksilver</Card.Title>
                  </Card.Body>
                </Card>

                <Card style={{ width: '24rem', height: '15rem' }}>
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    {/* Remplacer Card.Title par l'image */}
                    <img
                      src={
                        mode === 'dark'
                          ? ripcurl
                          : ripcurl
                      }
                      alt="Femme en hiver"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                      }}
                    />
                    <Card.Title>Quicksilver</Card.Title>
                  </Card.Body>
                  
                </Card>

                <Card style={{ width: '25rem', height: '15rem' }}>
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    {/* Remplacer Card.Title par l'image */}
                     <img
                      src={
                        mode === 'dark'
                          ? firewire_fond_noir 
                          : firewire_fond_blanc
                      }
                      alt="Femme en hiver"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                      }}
                    />
                    <Card.Title>Quicksilver</Card.Title>
                  </Card.Body>
                </Card>

                <Card style={{ width: '25rem', height: '15rem' }}>
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    {/* Remplacer Card.Title par l'image */}
                    <img
                      src={
                        mode === 'dark'
                          ? logo_oneill_fond_noir
                          : logo_oneill_fond_blanc
                      }
                      alt="Femme en hiver"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                      }}
                    />
                    <Card.Title>Quicksilver</Card.Title>
                  </Card.Body>
                </Card>

                <Card style={{ width: '25rem', height: '15rem' }}>
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    {/* Remplacer Card.Title par l'image */}
                    <img
                      src={
                        mode === 'dark'
                          ? logo_hurley_fond_noir
                          : logo_hurley_fond_blanc
                      }
                      alt="Femme en hiver"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                      }}
                    />
                    <Card.Title>Quicksilver</Card.Title>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
        <hr></hr>
      </div>
    </div>
  )
}
