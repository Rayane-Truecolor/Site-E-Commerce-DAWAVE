import { useContext, useEffect } from 'react';
import { Carousel, Card, Stack } from 'react-bootstrap';
import { Store } from '../Store';

// Importez les images fond noir et fond blanc
import logo_quicksilver_fond_noir from '/images/logo/FondNoir/logo_quicksilver_fond_noir.jpg';
import logo_quicksilver_fond_blanc from '/images/logo/FondBlanc/logo_quicksilver_fond_blanc.png';
import logo_ripcurl_fond_blanc from '/images/logo/FondBlanc/logo_ripcurl_fond_blanc.png';
import logo_oneill_fond_blanc from '/images/logo/FondBlanc/logo_oneill_fond_blanc.png';
import firewire_fond_noir from '/images/logo/FondNoir/firewire_fond_noir.png';
import firewire_fond_blanc from '/images/logo/FondBlanc/firewire_fond_blanc.png';
import logo_oneill_fond_noir from '../../public/images/logo/FondNoir/logo_oneill_fond_noir.png';
import logo_hurley_fond_noir from '/images/logo/FondNoir/logo_hurley_fond_noir.png';
import logo_hurley_fond_blanc from '/images/logo/FondBlanc/logo_hurley_fond_blanc.png';
import fcs_fond_blanc from '/images/logo/FondBlanc/fcs_fond_blanc.png';
import fcs_fond_noir from '/images/logo/FondNoir/fcs_fond_noir.png';
import logo_ripcurl_fond_noir from '/images/logo/FondNoir/logo_ripcurl_fond_noir.png';
import { Link } from 'react-router-dom';

// Définir un type pour le paramètre 'array'
type ArrayType = Array<string>;

export default function CarouselComponent() {

  const images_fond_noir: string[] = [
    logo_quicksilver_fond_noir,
    firewire_fond_noir,
    logo_oneill_fond_noir,
    logo_hurley_fond_noir,
    fcs_fond_noir,
    logo_ripcurl_fond_noir,
  ];
  // Tableaux d'images fond noir et fond blanc
  const images_fond_blanc: string[] = [
    logo_quicksilver_fond_blanc,
    logo_ripcurl_fond_blanc,
    logo_oneill_fond_blanc,
    firewire_fond_blanc,
    logo_hurley_fond_blanc,
    fcs_fond_blanc,
  ];



  const getLogoDestination = (image: string) => {
    switch (image) {
      case logo_quicksilver_fond_blanc:
        return '/quicksilver';
      case logo_ripcurl_fond_blanc:
        return '/ripcurl';
      case logo_oneill_fond_blanc:
        return '/oneill';
      case firewire_fond_blanc:
        return '/firewire';
      case logo_hurley_fond_blanc:
        return '/hurley';
      case fcs_fond_blanc:
        return '/fcs';
      default:
        return '/';
    }
  };

  // Contexte de l'application
  const { state: { mode } } = useContext(Store);

  // Effet pour mettre à jour le thème
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);

  // Fonction pour diviser le tableau de logos en groupes de quatre
  const chunkArray = (array: ArrayType, chunkSize: number) => {
    const chunkedArray: Array<ArrayType> = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  // Sélectionnez le tableau approprié en fonction du mode
  const images = mode === 'dark' ? images_fond_noir : images_fond_blanc;

  return (
    <div>
      
      <div className="sousTitre text-center fs-2 my-5 fw-bold">
      <h1 className="sousTitre text-center fs-2  fw-bold">
        Marque populaire
      </h1>
        <Carousel style={{ height: 400 }}>
          {chunkArray(images, 4).map((chunk, index) => (
           <Carousel.Item key={index} style={{ height: 400 }}>
           <Stack
             direction="horizontal"
             className="h-100 justify-content-center align-items-center"
             gap={5}
           >
             {chunk.map((image, idx) => (
               <div key={idx} style={{ width: '24rem', height: '15rem' }}>
                 <Link to={getLogoDestination(image)}>
                   <img
                     src={image}
                     alt={`Image ${idx}`}
                     style={{
                       width: '100%',
                       height: '100%',
                       objectFit: 'fill',
                     }}
                   />
                 </Link>
               </div>
             ))}
           </Stack>
         </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
