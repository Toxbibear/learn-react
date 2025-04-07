import React from 'react';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is the first product.',
      price: 19.99,
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is the second product.',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is the third product.',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;