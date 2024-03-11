import femmeHiverImage from '/images/femme_hiver.jpg'

import championSurf2 from '/images/championSurf2.jpg'
import HommeQuiNage from '/images/HommeQuiNage.jpg'
import SurfMenuiserie from '/images/SurfMenuiserie.jpg'
import finalswinners from '/images/finalswinners.jpg'

function AutoLayoutSizingExample() {
  return (
    <div>
      <div className=" sousTitre fw-bold fs-2  my-5 text-center">
        Suivez nous
        <p>Identifiez-nous, on partage vos meilleurs looks !</p>
      </div>

      <div className="wrapper">
        <div className="one">
          <img
            src={femmeHiverImage}
            alt="Description de l'image"
            style={{ maxWidth: '100%', height: '100%' }}
          />
          <a
            className="overlay-button"
            href="https://www.instagram.com/accounts/login/"
          >
            S'abonner
          </a>
        </div>
        <div className="two">
          <img
            src={SurfMenuiserie}
            alt="Description de l'image"
            style={{ maxWidth: '100%', height: '100%' }}
          />
          <a
            className="overlay-button"
            href="https://www.instagram.com/accounts/login/"
          >
            S'abonner
          </a>
        </div>
        <div className="three">
          <img
            src={HommeQuiNage}
            alt="Description de l'image"
            style={{ maxWidth: '100%', height: '100%' }}
          />
          <a
            className="overlay-button"
            href="https://www.instagram.com/accounts/login/"
          >
            S'abonner
          </a>
        </div>
        <div className="five">
          <img
            src={finalswinners}
            alt="Description de l'image"
            style={{ maxWidth: '100%', height: '100%' }}
          />
          <a
            className="overlay-button"
            href="https://www.instagram.com/accounts/login/"
          >
            S'abonner
          </a>
        </div>
        <div className="six">
          <img
            src={championSurf2}
            alt="Description de l'image"
            style={{ maxWidth: '100%', height: '100%' }}
          />
          <a
            className="overlay-button"
            href="https://www.instagram.com/accounts/login/"
          >
            S'abonner
          </a>
        </div>
      </div>
    </div>
  )
}

export default AutoLayoutSizingExample
