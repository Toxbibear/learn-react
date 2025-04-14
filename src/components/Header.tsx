import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const Header: React.FC = () => {
  const { cart } = useCart();
  const cartCount = cart.length;
 
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-blue-600 text-white shadow-md">
      <Link
        to={"/"}
        className=" button flex items-center space-x-2 text-white decoration-none"
      >
        <h1 className="text-2xl font-bold">My Store</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <Link
          to={"/cart"}
          className=" button flex items-center space-x-2 text-white decoration-none"
        >
          <button className="button flex items-center space-x-2 hover:bg-red-500 text-white transition duration-250 ease-in-out rounded-full px-0.5 font-bold">
            <span className="text-sm">Cart</span>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cartCount}
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
