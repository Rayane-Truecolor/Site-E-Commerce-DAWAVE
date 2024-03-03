import { Carousel, Card, Stack, Button } from 'react-bootstrap'
import femmeHiverImage from '/images/femme_hiver.jpg'
export default function Carousele2() {
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

  return (
    <div>
      <h1 className="sousTitre text-center fs-2 my-5 fw-bold">
        Meilleur vente ({reviews.length} produits)
      </h1>
      <div className="bg-opacity-25 container-fluid">
        <Carousel style={{ height: 550 }}>
            
          {reviews.map(() => (
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={5}
              >
                <Card style={{ width: '25rem', height: '25rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's contentazeazeaz.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: '25rem', height: '25rem' }}>
  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
    {/* Remplacer Card.Title par l'image */}
    <img src={femmeHiverImage} alt="Femme en hiver" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    <Card.Text>
      Some quick example text to build on the card title and
      make up the bulk of the card's content.
    </Card.Text>
    <div className="d-flex ">
    <Button variant="primary" style={{ margin: '10px'}}>Go somewhere</Button>
    <Button variant="primary" style={{ margin: '10px'}}>Go somewhere</Button>

    </div>
    
  </Card.Body>
</Card>

                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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
