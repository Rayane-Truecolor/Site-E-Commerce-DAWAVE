import React from 'react'; // Importe React
import { useTranslation } from 'react-i18next'; // Importe la fonction useTranslation pour gérer la traduction

const Mention: React.FC = () => {
  const { i18n } = useTranslation(); // Utilise la fonction useTranslation pour accéder aux traductions

  return (
    <div>
      <div className="cgv">
        <h2 className="FAQh2">{i18n.t('FooterMention')}</h2>
        {/* Affiche le titre en utilisant la traduction (FooterMention) */}

        <ol>
          {/* Liste ordonnée */}
          <li>
            <strong className="text-decoration-underline">{i18n.t('ÉditeurSite')}</strong>
            {/* Affiche du texte en gras (ÉditeurSite) en utilisant la traduction */}
            <p>{i18n.t('MentionBloc1')}</p>
            {/* Affiche un paragraphe en utilisant la traduction (MentionBloc1) */}
          </li>
          <li>
            <strong className="text-decoration-underline">Contact :</strong>
            {/* Affiche "Contact :" en utilisant du texte en gras */}
            <ul>
              {/* Liste non ordonnée imbriquée */}
              <li>
                <strong className="chapitre">
                  {i18n.t('ProcessusCommande')}
                </strong>
                {/* Affiche du texte en gras avec une classe CSS (ProcessusCommande) en utilisant la traduction */}
                <p>
                  {i18n.t('Mail')} <br />
                  {i18n.t('Phone')}
                </p>
                {/* Affiche les textes de l'adresse e-mail et du numéro de téléphone en utilisant la traduction */}
              </li>
              <li>
                <strong className="chapitre"> {i18n.t('Mail')}</strong>
                {/* Affiche du texte en gras avec une classe CSS (Mail) en utilisant la traduction */}
                <p>{i18n.t('MentionBloc2')}</p>
                {/* Affiche un paragraphe en utilisant la traduction (MentionBloc2) */}
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-decoration-underline">{i18n.t('PropriétéInt')}</strong>
            {/* Affiche du texte en gras (PropriétéInt) en utilisant la traduction */}
            <ul>
              {/* Liste non ordonnée imbriquée */}
              <li>
                <p>{i18n.t('MentionBloc3')}</p>
                {/* Affiche un paragraphe en utilisant la traduction (MentionBloc3) */}
              </li>
            </ul>
          </li>
          <li>
            <strong className="text-decoration-underline">{i18n.t('Cookies')}</strong>
            {/* Affiche du texte en gras (Cookies) en utilisant la traduction */}
            <ul>
              {/* Liste non ordonnée imbriquée */}
              <li>
                <p>{i18n.t('MentionBloc4')}</p>
                {/* Affiche un paragraphe en utilisant la traduction (MentionBloc4) */}
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Mention;
