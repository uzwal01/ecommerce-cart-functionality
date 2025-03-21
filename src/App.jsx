import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist";
import { products } from "./data/products";
import CartModal from "./components/CartModal";

const App = () => {
  const [cart, setCart] = useState([]); // for cart state
  const [isCartOpen, setIsCartOpen] = useState(false); // for cart's initial state

  //Function to add a product into the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  //Function to update the quantity
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //Function to remove a product
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-[1200px]">
          <Navbar
            cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
            setIsCartOpen={setIsCartOpen}
          />
          <Productlist products={products} addToCart={addToCart} />
          {isCartOpen && (
            <CartModal
              cart={cart}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              setIsCartOpen={setIsCartOpen}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
