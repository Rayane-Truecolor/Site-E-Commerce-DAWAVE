
import React from 'react';

interface Product {
  name: string;
  image: string;
  price: number;
  discount?: number;
}

interface Props {
  product: Product;
}

const DiscountPrice: React.FC<Props> = ({ product }) => {
  const { name, image, price, discount = 0 } = product;

  return (
    <div className="product">
      <img className="product-image" src={image} alt={name} />
      <div className="product-details">
        <h1 className="product-name">{name}</h1>
        <div className="product-price">
          <span className="original-price">${price}</span>
          {discount > 0 && (
            <span className="discounted-price">
              ${price - (price * discount) / 100}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscountPrice;