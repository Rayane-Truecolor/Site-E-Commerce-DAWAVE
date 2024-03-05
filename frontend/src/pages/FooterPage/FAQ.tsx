import React from 'react';

function FAQ() {
  return (
    <div>
      <div className="FAQ">
        <div className="image">
          <h2 className="FAQh2">Foire aux questions (FAQ) - Da'Wave!</h2>
        </div>
        <ol>
          <li>
            <span>Quels sont les modes de paiement acceptés sur Da'Wave!?</span>{' '}
            <br></br>Nous acceptons les paiements par carte de crédit (Visa,
            Mastercard, American Express) ainsi que les paiements via PayPal.
          </li>
          <li>
            <span>Quels sont les délais de livraison?</span> <br></br> Les
            délais de livraison varient en fonction de votre lieu de résidence.
            En général, les commandes sont livrées dans un délai de 3 à 7 jours
            ouvrables.
          </li>
          <li>
            <span>
              Puis-je retourner un article si je ne suis pas satisfait?
            </span>{' '}
            <br></br> Oui, vous pouvez retourner un article dans les 30 jours
            suivant la réception de votre commande, à condition qu'il soit
            inutilisé et dans son emballage d'origine. Veuillez consulter notre
            politique de retour pour plus de détails.
          </li>
          <li>
            <span> Proposez-vous la livraison internationale?</span> <br></br>{' '}
            Oui, nous livrons dans plusieurs pays à travers le monde. Veuillez
            vérifier la disponibilité des livraisons internationales lors du
            processus de commande.
          </li>
          <li>
            <span>Quels types de planches de surf proposez-vous?</span>{' '}
            <br></br> Nous proposons une large gamme de planches de surf, y
            compris des planches pour débutants, des shortboards, des longboards
            et des planches de surf haute performance. Vous pouvez explorer
            notre catalogue en ligne pour voir notre sélection complète.
          </li>
          <li>
            <span>Quelle est la politique de garantie sur les produits? </span>{' '}
            <br></br> Chaque fabricant a sa propre politique de garantie. Nous
            travaillons avec des marques réputées qui offrent des garanties sur
            leurs produits. Veuillez consulter la description du produit pour
            connaître les détails de la garantie.
          </li>
          <li>
            <span> Comment puis-je contacter votre service clientèle? </span>{' '}
            <br></br> Vous pouvez nous contacter en utilisant le formulaire de
            contact sur notre site web ou par e-mail à l'adresse
            support@dawave.com. Nous nous efforçons de répondre à toutes les
            demandes dans les 24 heures.
          </li>
          <li>
            <span>
              {' '}
              Proposez-vous des cours de surf ou des services de location de
              planches?{' '}
            </span>{' '}
            <br></br> Actuellement, nous ne proposons pas de cours de surf ni de
            services de location de planches. Nous nous concentrons uniquement
            sur la vente de matériel de surf.
          </li>
        </ol>
        <p>
          <span>
            N'hésitez pas à nous contacter si vous avez d'autres questions ou
            des besoins d'assistance supplémentaires. Notre équipe est là pour
            vous aider !
          </span>
        </p>
      </div>
    </div>
  );
}

export default FAQ;
