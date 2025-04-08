import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={name}
      />
      <div className="p-4 flex flex-row justify-between h-12">
        <h2 className="text-xl font-bold mb-2 cursor-default">{name}</h2>
        <p className="text-lg font-semibold text-gray-900 cursor-default">${price.toFixed(2)}</p>
      </div>
        <p className="text-gray-700 text-base mb-4 text-center cursor-default">{description}</p>
    </div>
  );
};

export default ProductCard;