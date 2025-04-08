import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { Product } from '../types';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      axios
        .get<Product[]>('http://localhost:3000/products')
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-3/4">
        {products.map((product) => (
          <div className='flex justify-center w-full' key={product.id}>
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;