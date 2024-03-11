import React from 'react';
import { useTranslation } from 'react-i18next';

import image_block1 from '../../../public/images/qui-sommes-nous/image_block1.jpg';
import image_block2 from '../../../public/images/qui-sommes-nous/image_block2.jpg';
import image_block3 from '../../../public/images/qui-sommes-nous/image_block3.jpg';
import image_block4 from '../../../public/images/qui-sommes-nous/image_block4.jpg';

// Fonction Qui, composant pour afficher des informations sur l'entreprise
const Qui: React.FC = () => {
  // Utilisation du hook useTranslation pour accéder à la traduction
  const { i18n } = useTranslation();

  return (
    <div className="page-margin">
      <div className="block">
        {/* Titre de la section "Qui sommes-nous ?" */}
        <h2 className="FAQh2">{i18n.t('QuiSommesNous')}</h2>

        {/* Premier bloc d'informations */}
        <div className="block1">
          {/* Image pour le premier bloc */}
          <img src={image_block1} alt="Image1" style={{ width: '600px' }} />
          {/* Paragraphe de texte pour le premier bloc */}
          <p className="fs-4">{i18n.t('BlocQui1')}</p>
        </div>

        {/* Deuxième bloc d'informations */}
        <div className="block2">
          {/* Paragraphe de texte pour le deuxième bloc */}
          <p className="fs-4">{i18n.t('BlocQui2')}</p>
          {/* Image pour le deuxième bloc */}
          <img src={image_block2} alt="Image2" style={{ width: '600px' }} />
        </div>

        {/* Troisième bloc d'informations */}
        <div className="block3">
          {/* Image pour le troisième bloc */}
          <img
            src={image_block3}
            alt="Image1"
            style={{ width: '600px', height: 'auto' }}
          />
          {/* Paragraphe de texte pour le troisième bloc */}
          <p className="fs-4">{i18n.t('BlocQui3')}</p>
        </div>

        {/* Quatrième bloc d'informations */}
        <div className="block4">
          {/* Paragraphe de texte pour le quatrième bloc */}
          <p className="fs-4">{i18n.t('BlocQui4')}</p>
          {/* Image pour le quatrième bloc */}
          <img
            src={image_block4}
            alt="Image2"
            style={{ width: '600px', height: 'auto' }}
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

// Exporte la fonction Qui comme composant par défaut
export default Qui;
