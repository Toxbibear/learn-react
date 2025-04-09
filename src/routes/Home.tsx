import { useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { Product } from "../types";

function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleAddToCart = (product: Product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    if (isProductInCart) {
      setFeedbackMessage("This product is already in your cart.");
    } else {
      setCart((prevCart) => [...prevCart, product]);
      setFeedbackMessage("Product added to cart!");
    }
    setTimeout(() => {
      setIsVisible(true);
    },200);

    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setFeedbackMessage(null), 2700);// Wait for fade-out transition
    }, 3000);
  };

  const cartCount = cart.length;

  return (
    <div>
      <Header cartCount={cartCount} />
      {feedbackMessage && (
        <div
          className={`fixed top-4 right-25 bg-gray-800 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {feedbackMessage}
        </div>
      )}
      <ProductList handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default Home;
