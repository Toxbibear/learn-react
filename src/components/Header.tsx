import React from "react";

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-blue-600 text-white shadow-md">
      <h1 className="text-2xl font-bold">My Store</h1>
      <div className="flex items-center space-x-4">
        <button className="button flex items-center space-x-2 hover:bg-red-500 text-white transition duration-250 ease-in-out rounded-full px-0.5 font-bold">
          <span className="text-sm">Cart</span>
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header; 