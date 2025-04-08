import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { name, description, price, imageUrl } = product;

  return (
    <div className="w-full flex flex-col justify-center items-center rounded overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={name}
      />
      <div className=" w-full p-4 flex flex-row justify-between h-12">
        <h2 className="text-xl font-bold mb-2 cursor-default">{name}</h2>
        <p className="text-lg font-semibold text-gray-900 cursor-default">${price.toFixed(2)}</p>
      </div>
      <p className="text-gray-700 text-base mb-4 text-center cursor-default">{description}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="w-full button bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;