import React from "react";

const Navbar = ({ cartCount, setIsCartOpen }) => {
  return (
    <>
      <div>
        <nav className="p-4 bg-gray-800 text-white flex justify-between ">
          <h1 className="text-xl">E-commerce</h1>
          <button onClick={() => setIsCartOpen(true)} className="relative bg-blue-500 rounded-lg px-2 py-1 hover:bg -gray-500 cursor-pointer delay-75 ">
             Cart <span className="text-red-400">({cartCount})</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
