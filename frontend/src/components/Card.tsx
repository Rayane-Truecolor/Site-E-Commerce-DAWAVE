import React from 'react'
import femmeHiverImage from '/images/femme_hiver.jpg'
import homme2Image from '/images/homme2.jpg'
import homme1Image from '/images/homme1.jpg'
import { useTranslation } from 'react-i18next';

const Card: React.FC = () => {
  const { i18n } = useTranslation();

  
  return (
    <div className="image_card">
      <div className="image_container">
        <img src={femmeHiverImage} alt="Femme en hiver" />
        <a href="/collection-dawave" className="text_overlay">
        {i18n.t('Newest')} <br></br>{i18n.t('Newest2')}
        </a>
        <hr></hr>
      </div>

      <div className="image_container">
      <img src={homme2Image} alt="Homme nageant face camera sur une planche " />

        <a href="/camera" className="text_overlay">
          GOPRO HERO5 <br></br>
        </a>
        <hr></hr>
      </div>

      <div className="image_container">
      <img src={homme1Image} alt="Deux hommes flottant sur une planche de surf faisant le signe 'peace'" />

        <a href="/combinaison-ete" className="text_overlay">
        Nouvelle Combinaison été<br></br>
        </a>
        <hr></hr>
      </div>
    </div>
  )
}

export default Card
