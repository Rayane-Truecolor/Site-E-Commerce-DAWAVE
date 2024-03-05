import React from 'react'
import femmeHiverImage from '/images/femme_hiver.jpg'
import homme2Image from '/images/homme2.jpg'
import homme1Image from '/images/homme1.jpg'

const Card: React.FC = () => {
  return (
    <div className="image_card">
      <div className="image_container">
        <img src={femmeHiverImage} alt="Femme en hiver" />
        <a href="/nouvelle-collection" className="text_overlay">
          Nouvelle collection <br></br> Da'Wave!
        </a>
        <hr></hr>
      </div>

      <div className="image_container">
      <img src={homme2Image} alt="Homme nageant face camera sur une planche " />

        <a href="/gopro" className="text_overlay">
          GOPRO HERO5 <br></br>
        </a>
        <hr></hr>
      </div>

      <div className="image_container">
      <img src={homme1Image} alt="Deux hommes flottant sur une planche de surf faisant le signe 'peace'" />

        <a href="/new" className="text_overlay">
        GOPRO HERO5 <br></br>
        </a>
        <hr></hr>
      </div>
    </div>
  )
}

export default Card
