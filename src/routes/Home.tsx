import { useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { Product } from "../types";

function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    if (isProductInCart) {
      return;
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  return (
    <div>
      <Header />
      <ProductList handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default Home;
