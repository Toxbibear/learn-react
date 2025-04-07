import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-blue-600 text-white shadow-md mr-4 ml-4" >
      <h1 className="text-2xl font-bold">My Store</h1>

      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2">
          <span className="text-sm">Cart</span>
        </button>
      </div>
    </header>
  );
};

export default Header;