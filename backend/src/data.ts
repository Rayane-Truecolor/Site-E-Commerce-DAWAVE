import { User } from './models/userModel'
import { Product } from './models/productModel'
import bcrypt from 'bcryptjs'

export const sampleProducts: Product[] = [
  {
    name: 'Nike Slim shirt',
    slug: 'nike-slim-shirt',
    image: '../images/planche/hurley/planche_hurley_3_hybride.jpg',
    category: 'Planche',
    category2: 'Hybride',
    price: 120,
    discount: 10,
    countInStock: 10,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality shirt',
  },
  {
    name: 'Adidas Fit Shirt',
    slug: 'adidas-fit-shirt',
    image: '../images/planche/hurley/planche_hurley_3_hybride.jpg',
    category: 'Shirts',
    category2: 'Hybride',

    price: 100,
    discount: 0,
    countInStock: 20,
    brand: 'Adidas',
    rating: 4.0,
    numReviews: 10,
    description: 'high quality shirt',
  },

  {
    name: 'Lacoste Free Pants',
    slug: 'lacoste-free-pants',
    image: '../images/p3.jpg',
    category: 'Pants',
    category2: 'Hybride',

    price: 220,
    discount: 0,
    countInStock: 0,
    brand: 'Lacoste',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality product',
  },

  {
    name: 'Nike Slim Pant',
    slug: 'nike-slim-pant',
    image: '../images/p4.jpg',
    category: 'Pants',
    category2: 'Longboard',

    price: 78,
    discount: 0,

    countInStock: 15,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 14,
    description: 'high quality product',
  },

  /*ripcurl*/

  {
    name: 'Planche RipCurl Hybride Cool',
    slug: 'ripcurl-cool',
    image: '../images/planche/ripcurl/planche_ripcurl_1_hybrid.jpg',
    category: 'Planche',
    category2: 'Hybride',
    price: 410,
    discount: 0,

    countInStock: 25,
    brand: 'RipCurl',
    rating: 4.5,
    numReviews: 14,
    description: '6igh quality product',
  },

  {
    name: 'Planche RipCurl Shortboard Summer',
    slug: 'ripcurl-summer',
    image: '../images/planche/ripcurl/planche_ripcurl_2_shortboard.jpg',
    category: 'Planche',
    category2: 'Shortboard',

    price: 420,
    discount: 0,
    countInStock: 25,
    brand: 'RipCurl',
    rating: 4.6,
    numReviews: 19,
    description: 'high quality product',
  },

  {
    name: 'Planche RipCurl Longboard Hot',
    slug: 'ripcurl-hot',
    image: '../images/planche/ripcurl/planche_ripcurl_3_longboard.jpg',
    category: 'Planche',
    category2: 'Longboard',

    price: 490,
    discount: 0,
    countInStock: 29,
    brand: 'RipCurl',
    rating: 4.1,
    numReviews: 10,
    description: 'high quality product',
  },

  /*ripcurl*/

  /*Quicksilver*/
  {
    name: 'Planche Quicksilver Shortboard Performance',
    slug: 'quicksilver-performance',
    image: '../images/planche/quicksilver/planche_quicksilver_1_shortboard.jpg',
    category: 'Planche',
    category2: 'Shortboard',

    price: 560,
    discount: 0,
    countInStock: 25,
    brand: 'Quicksilver',
    rating: 4.2,
    numReviews: 3,
    description: 'high quality product',
  },

  {
    name: 'Planche Quicksilver Shortboard Waver',
    slug: 'quicksilver-waver',
    image: '../images/planche/quicksilver/planche_quicksilver_2_shortboard.jpg',
    category: 'Planche',
    category2: 'Shortboard',

    price: 590,
    discount: 0,
    countInStock: 22,
    brand: 'Quicksilver',
    rating: 4.9,
    numReviews: 6,
    description: 'high quality product',
  },

  {
    name: 'Planche Quicksilver Shortboard Punch',
    slug: 'quicksilver-punch',
    image: '../images/planche/quicksilver/planche_quicksilver_3_shortboard.png',
    category: 'Planche',
    category2: 'Shortboard',

    price: 600,
    discount: 0,
    countInStock: 7,
    brand: 'Quicksilver',
    rating: 4.6,
    numReviews: 7,
    description: 'high quality product',
  },
  /*Quicksilver*/

  /*Oneill*/

  {
    name: 'Planche Oneill Longboard Snow',
    slug: 'oneill-snow',
    image: '../images/planche/oneill/planche_oneill_1_longboard.jpg',
    category: 'Planche',
    category2: 'Longboard',

    price: 510,
    discount: 0,
    countInStock: 8,
    brand: 'Oneill',
    rating: 4.7,
    numReviews: 9,
    description: 'high quality product',
  },

  {
    name: 'Planche Oneill Longboard Snow',
    slug: 'oneill-snow',
    image: '../images/planche/oneill/planche_oneill_2_longboard.jpg',
    category: 'Planche',
    category2: 'Longboard',

    price: 540,
    discount: 0,
    countInStock: 17,
    brand: 'Oneill',
    rating: 4.6,
    numReviews: 11,
    description: 'high quality product',
  },

  /*Oneill*/

  {
    name: 'Planche Hurley shortboard Fall',
    slug: 'hurley-fall',
    image: '../images/planche/quicksilver/planche_hurley_1_shortboard.jpg',
    category: 'Planche',
    category2: 'Shortboard',

    price: 565,
    discount: 0,
    countInStock: 2,
    brand: 'Hurley',
    rating: 4.1,
    numReviews: 2,
    description: 'high quality product',
  },

  {
    name: 'Planche Hurley Shortboard Fire',
    slug: 'hurley-fall',
    image: '../images/planche/quicksilver/planche_hurley_2_shortboard.jpg',
    category: 'Planche',
    category2: 'Shortboard',
    price: 575,
    discount: 0,
    countInStock: 6,
    brand: 'Hurley',
    rating: 4.3,
    numReviews: 5,
    description: 'high quality product',
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
