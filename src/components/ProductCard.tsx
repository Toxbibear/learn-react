import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <p className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;