import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={name}
      />
      <div className="p-4 flex flex-row justify-between h-12">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</p>
      </div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
    </div>
  );
};

export default ProductCard;