import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Définissez ici vos traductions en anglais
        greeting: 'Sign In',
        Planche: 'Board',
        Dérive: 'Fins',
        Pads: 'Pads',
        Accessoire: 'Accesory',
        Hybride: 'Hybrid',
        Combinaison: 'Suit',
        Camera: 'Portable Camera',
        Profil: 'User Profile',
        Historique: 'Order History',
        Deconnecter: 'Sign out',
        Langage: 'Language',
        Inscrire: 'Sign up',

        //Hero

        Hero1:
          'For the opening of the website, register and benefit from exclusive discounts.',

        //Carte
        Nouveau: 'NEWEST PRODUCTS',
        GoProCard: 'The newest portable camera',
        Newest: "NEW COLLECTION ",
        Newest2: "DA'WAVE",

        //Carousel

        Carousel1: 'Popular brands',
        Carousel2: 'Popular products',

        //Article

        Article1:
          'Watch live on Twitch the French champion this Monday 10 August 2023',
        LireArticle: 'Read the article',

        Article2: '2023 World Cup Winner',
        Articles2:
          'Luiz Ruavez Sancho and his victorious final at the MEO RIP Curl Pro at Portugal, discover the highlights',

        Titre1Article:
          '2023 South America Surf Championship: the RIP CURL team wins hands down in this cold season',

        Titre2Article:
          '2023 South America Surf Championship: the RIP CURL team wins hands down in this cold season',

        Bloc1Article:
          'The raging waves of the ocean were the scene of a sensational spectacle during the last Surfing Championship which was held at the emblematic Dora beach on September 7, 2023 at 2 p.m. The best surfers in the world have come together to compete in this legendary competition.',
        Bloc2Article:
          'The raging waves of the ocean were the scene of a sensational spectacle during the last Surfing Championship held at the iconic Dora Beach on September 7, 2023 at 2 p.m. The best surfers in the world gathered to compete in this legendary competition',
        Bloc3Article:
          'The atmosphere on the beach was electric, with fans coming from all over the world to cheer on their favorite athletes. Screams of joy and applause rang out every time a surfer caught an exceptional wave.',
        Bloc4Article:
          'This surfing championship will be remembered as an example of dedication, talent and passion. It reminds everyone that the connection between man and the ocean is a powerful force, capable of creating moments of beauty and adrenaline.',
        Bloc5Article:
          ' As the sun set over the marine horizon, participants and spectators gathered to celebrate an extraordinary week of competition, camaraderie and respect for the marine environment that inspires us all.',
        Bloc6Article:
          'Stay tuned for more thrilling adventures in the world of surfing as this passion continues to unite and amaze us.',
        Bloc7Article: 'To watch the match replay, click',
        Bloc8Article: 'this link',

        //New

        Nouveautés: 'Novelty ',
        //Product

        ProductStock: 'Out of stock',
        Productpanier: 'Add to Cart',
        EnStock: 'In stock',

        //Rating

        Avis: 'Reviews',

        //Footer

        FooterContact: 'Contact us',
        FooterCGU: 'Terms of Service',
        CGU: 'Who are we ?',
        FooterMention: 'Legal Notice',

        //Mention
        ÉditeurSite: 'Site editor:',
        MentionBloc1:
          "The Da'Wave website is edited by Mr. Rayane HASSAINE, having his head office at 27 allée Ronsard, registered under SIRET number 362 521 879 00034, and represented by Mr. Rayane HASSAINE.",
        MentionBloc2:
          "All elements (texts, images, videos, etc.) present on the Da'Wave site are copyright-free property. Any reproduction, representation, distribution or use, total or partial, of the elements of the site for purposes other than individual and private consultation is authorized.",
        ProcessusCommande: 'Order process',

        Mail: 'Mail : ray.hassaine@gmail.com',

        MentionBloc3:
          'The collection and processing of personal data made when visiting and using the site is governed by our privacy policy, available at www.dawave.fr.',
        MentionBloc4:
          'During your visit to the site, cookies may be placed on your terminal. You can manage your cookie preferences by visiting our dedicated page.',
        h2Mention: 'Legal Notice',
        Phone: 'Phont Number : 06.25.65.52.06',
        PropriétéInt: 'Intellectual property :',
        Cookies: 'Cookies :',

        //Qui

        QuiSommesNous: 'Who are we ?',
        BlocQui1:
          "Our Story: Our website was founded by a surfing enthusiast who decided to share his passion and make it easier to access the best surfing equipment. Having spent years riding the waves, our founder has gained extensive expertise and knowledge from the world of surfing. Welcome to Da'Wave!",
        BlocQui2:
          'Our passion for surfing: We are a team of passionate surfers dedicated to providing an exceptional experience for surfers around the world. We firmly believe that surfing is more than just a sport. It is a way of life that embodies freedom, connection with nature and pure pleasure. We want to share this passion with you by offering you the best surf equipment and accessories on the market.',
        BlocQui3:
          "Our commitment: We are committed to providing high quality products and renowned brands to meet all your surfing needs. Whether you're an enthusiastic beginner or a seasoned surfer, we've got you covered. Our team is constantly looking for the latest trends and innovations in the world of surfing to offer you a diverse and cutting-edge selection. Read the articleThe Da’Wave team.",
        BlocQui4:
          'Our community: In addition to offering you an exceptional selection of surf equipment, we also want to create a community of surf enthusiasts. We encourage you to join us on social media, share your experiences and connect with other surf enthusiasts. Join us to stay informed about the latest news, special events and exclusive promotions. We are delighted to accompany you on your surfing adventure and to help make each session on the waves unforgettable.',

        //ProductScrene

        ProductPrice: 'Price :',
      },
    },

    fr: {
      translation: {
        // Définissez ici vos traductions en français
        greeting: 'Se connecter',
        Planche: 'Planche',
        Dérive: 'Dérive',
        Pads: 'Pads',
        Accessoire: 'Accessoire',
        Hybride: 'Hybride',
        Combinaison: 'Combinaison',
        Camera: 'Camera Portable',
        Profil: 'Profil',
        Historique: 'Historique des commandes',
        Deconnecter: 'Se deconnecter',
        Langage: 'Langage',
        Inscrire: "S'inscrire",

        //Hero

        Hero1:
          "Pour l'ouverture du site, inscrivez-vous et profitez de reductions exclusives.",

        //Carte

        Nouveau: 'NOUVEAUX PRODUITS',
        GoProCard: 'La nouvelle caméra portable',
        Newest: "Nouvelle collection Da'Wave",

        //Carousel

        Carousel1: 'Marques populaires',
        Carousel2: 'Produits populaires',

        //Article

        Article1:
          'Regarder en Live sur Twitch le championnait de France ce lundi 10 aout 2023',
        LireArticle: "Lire l'article",
        Article2: 'Gagnant de la coupe du monde 2023',
        Articles2:
          'Luiz Ruavez Sancho et sa finale victorieuse au MEO RIP Curl Pro au Portugal, decouvrez les moments fort',

        Titre1Article: 'Championnat de Surf',

        Titre2Article:
          "Championnat de Surf South America 2023 : l'écurie RIP CURL gagne haut la haut en cette saison froide",

        Bloc1Article:
          "Les vagues déchaînées de l'océan ont été le théâtre d'un spectacle sensationnel lors du dernier Championnat de Surf qui s'est tenu à l'emblématique plage de Dora le 7 septembre 2023 a 14h. Les meilleurs surfeurs du monde se sont réunis pour rivaliser dans cette compétition légendaire.",
        Bloc2Article:
          "Les conditions météorologiques étaient idéales, avec des vagues parfaites atteignant des hauteurs incroyables. Les surfeurs ont montré leurs compétences et leur agilité en domptant ces monstres d'eau avec grâce et détermination.",
        Bloc3Article:
          " L'ambiance sur la plage était électrique, avec des supporters venant du monde entier pour encourager leurs athlètes préférés. Les cris de joie et les applaudissements résonnaient chaque fois qu'un surfeur prenait une vague exceptionnelle.",
        Bloc4Article:
          "Ce championnat de surf restera gravé dans les mémoires comme un exemple de dévouement, de talent et de passion. Il rappelle à tous que la connexion entre l'homme et l'océan est une force puissante, capable decréer des moments de beauté et d'adrénaline.",
        Bloc5Article:
          " Alors que le soleil se couchait sur l'horizon marin, les participants et les spectateurs se sont rassemblés pour célébrer une semaine extraordinaire de compétition, de camaraderie et de respect envers l'environnement marin qui nous inspire tous.",
        Bloc6Article:
          " Restez à l'affût pour plus d'aventures palpitantes dans le monde du surf, car cette passion continue de nous unir et de nous émerveiller.",
        Bloc7Article: 'Pour regarder le replay du match, cliquez sur',
        Bloc8Article: 'ce lien',

        //New

        Nouveautés: 'Nouveautés ',
        //Product

        EnStock: 'En Stock',
        ProductStock: 'Hors stock',
        Productpanier: ' Ajouter au panier',

        //Rating

        Avis: 'Avis',

        //Footer

        FooterContact: 'Contactez-nous',
        FooterCGU: "Conditions générales d'utilisation",
        CGU: 'Qui sommes-nous ?',
        FooterMention: 'Mentions légales',
        ÉditeurSite: 'Éditeur du site :',

        ProcessusCommande: 'Processus de commande',

        Mail: 'Adresse e-mail : ray.hassaine@gmail.com',

        Phone: 'Phone number : 06.25.65.52.06',

        PropriétéInt: 'Propriété intellectuelle:',

        Cookies: 'Cookies :',

        //Qui

        QuiSommesNous: 'Qui sommes-nous ?',
        BlocQui1:
          "Notre histoire : Notre site web a été fondé par un passionné de surfqui a décidé de partager sa passion et de faciliter l'accès auxmeilleurs équipements de surf. Ayant passé des années à parcourirles vagues, notre fondateur a acquis une expertise et uneconnaissance approfondie de l'univers du surf. Bienvenue sur Da’Wave!",
        BlocQui2:
          " Notre passion pour le surf : Nous sommes une équipe de passionnés desurf dévoués à offrir une expérience exceptionnelle aux amateurs desurf du monde entier. Nous croyons fermement que le surf est plusqu'un simple sport. C'est un mode de vie qui incarne la liberté, laconnexion avec la nature et le plaisir pur. Nous voulons partagercette passion avec vous en vous offrant les meilleurs équipements etaccessoires de surf sur le marché.",
        BlocQui3:
          "Notre engagement : Nous nous engageons à fournir des produits dehaute qualité et des marques renommées pour répondre à tous vosbesoins en matière de surf. Que vous soyez un débutant enthousiasteou un surfeur chevronné, nous avons ce qu'il vous faut. Notre équipeest constamment à la recherche des dernières tendances etinnovations dans le monde du surf pour vous offrir une sélectiondiversifiée et à la pointe de la technologie. Lire l'articleL’équipe Da’Wave.",
        BlocQui4:
          "Notre communauté : En plus de vous offrir une sélectionexceptionnelle d'équipements de surf, nous souhaitons égalementcréer une communauté de passionnés de surf. Nous vous encourageons àvous joindre à nous sur les réseaux sociaux, à partager vosexpériences et à vous connecter avec d'autres amateurs de surf.Rejoignez-nous pour rester informé des dernières actualités, desévénements spéciaux et des promotions exclusives. Nous sommes ravisde vous accompagner dans votre aventure surfistique et de contribuerà rendre chaque session sur les vagues inoubliable.",

        // ProductScreen

        ProductPrice: 'Prix : ',
      },
    },
    // Ajoutez d'autres langues ici
  },
  lng: 'fr', // Langue par défaut
  fallbackLng: 'en', // Langue de secours
  interpolation: {
    escapeValue: false, // Ne pas échapper les valeurs HTML
  },
});

export default i18n;
