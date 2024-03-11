import React from 'react';
import { useTranslation } from 'react-i18next';

const CGU: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <div className="cgv">
        <h2 className="FAQh2">{i18n.t('FooterCGU')}</h2>

        <ol>
          <li>
            <strong className="text-decoration-underline">Objet</strong>
            <p>
              Les présentes conditions générales de vente régissent les
              relations contractuelles entre "Da'Wave!" et ses clients dans le
              cadre de la vente de matériel de surf. En passant commande sur
              notre site, vous acceptez sans réserve ces conditions.
            </p>
          </li>
          <li>
            <strong className="text-decoration-underline">Commandes</strong>
            <ol>
              <li>
                <strong className="chapitre">Processus de commande :</strong>
                <p>
                  Vous pouvez passer commande en sélectionnant les produits
                  désirés et en suivant les étapes indiquées sur notre site. Une
                  fois votre commande validée, un récapitulatif vous sera envoyé
                  par e-mail.
                </p>
              </li>
              <li>
                <strong className="chapitre">
                  Disponibilité des produits :
                </strong>
                <p>
                  Nos offres de produits et prix sont valables dans la limite
                  des stocks disponibles. En cas d'indisponibilité d'un produit
                  commandé, nous vous en informerons dans les meilleurs délais
                  et vous proposerons une solution de remplacement ou un
                  remboursement.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <strong className="text-decoration-underline" >Prix et Paiement</strong>
            <ol>
              <li>
                <strong className="chapitre">Prix :</strong>
                <p>
                  Les prix affichés sur notre site sont en euros et incluent la
                  TVA applicable. Les frais de livraison ne sont pas inclus dans
                  le prix des produits et seront ajoutés lors du processus de
                  commande.
                </p>
              </li>
              <li>
                <strong className="chapitre">Modes de paiement :</strong>
                <p>
                  Nous acceptons les paiements par carte de crédit, virement
                  bancaire ou tout autre moyen de paiement indiqué lors du
                  processus de commande.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <strong className="text-decoration-underline">Livraison</strong>
            <ol>
              <li>
                <strong className="chapitre">Délais de livraison :</strong>
                <p>
                  Nous nous efforçons de livrer les produits dans les délais
                  indiqués lors du processus de commande. Cependant, des retards
                  peuvent survenir en cas de circonstances exceptionnelles. Nous
                  ne pourrons être tenus responsables des retards de livraison
                  indépendants de notre volonté.
                </p>
              </li>
              <li>
                <strong className="chapitre">Frais de livraison :</strong>
                <p>
                  Les frais de livraison sont indiqués lors du processus de
                  commande et dépendent du lieu de livraison et du poids des
                  produits commandés.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <strong className="text-decoration-underline">Retours et Remboursements</strong>
            <ol>
              <li>
                <strong className="chapitre">Politique de retour :</strong>
                <p>
                  Si vous n'êtes pas satisfait de votre achat, vous disposez
                  d'un délai de 14 jours à compter de la réception du produit
                  pour nous le retourner, dans son état d'origine et accompagné
                  de tous les accessoires fournis. Les frais de retour sont à
                  votre charge.
                </p>
              </li>
              <li>
                <strong className="chapitre">Remboursements :</strong>
                <p>
                  Une fois le produit retourné et vérifié, nous procéderons au
                  remboursement dans un délai raisonnable, selon le mode de
                  paiement initial.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <strong className="text-decoration-underline" >Propriété intellectuelle</strong>
            <p>
              Tous les contenus présents sur notre site, tels que les textes,
              images, logos et vidéos, sont notre propriété intellectuelle et
              sont protégés par les lois en vigueur. Toute reproduction ou
              utilisation non autorisée de ces contenus est strictement
              interdite.
            </p>
          </li>
          <li>
            <strong className="text-decoration-underline">Confidentialité des données</strong>
            <p>
              Nous nous engageons à respecter la confidentialité de vos données
              personnelles. Les informations collectées lors du processus de
              commande ne seront utilisées que dans le cadre de votre commande
              et ne seront pas transmises à des tiers.
            </p>
          </li>
          <li>
            <strong className="text-decoration-underline">Modification des conditions générales de vente</strong>
            <p>
              Nous nous réservons le droit de modifier ces conditions générales
              de vente à tout moment. Les conditions applicables sont celles en
              vigueur au moment de la passation de la commande. Toute
              modification sera clairement indiquée sur notre site.
            </p>
          </li>
          <li>
            <strong className="text-decoration-underline">Litiges et juridiction</strong>
            <p>
              En cas de litige entre "Da'Wave!" et le client, les parties
              s'engagent à rechercher une solution amiable. À défaut d'accord,
              tout litige relatif aux présentes conditions générales de vente
              sera soumis à la juridiction compétente conformément aux lois en
              vigueur.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CGU;