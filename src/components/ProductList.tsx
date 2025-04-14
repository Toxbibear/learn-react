import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Product as BaseProduct } from "../types";
import { useCart } from "../context/CartContext";

interface Product extends BaseProduct {
  quantity?: number; // Make quantity optional
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {addToCart} = useCart();
  
  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
        setIsLoading(false); // Stop loading even if there's an error
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-3/4">
        {products.map((product) => (
            <div className="flex justify-center w-full" key={product.id}>
            <ProductCard
              product={product}
              onAddToCart={(product) => addToCart({ ...product, quantity: product. || 1 })}
            />
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;