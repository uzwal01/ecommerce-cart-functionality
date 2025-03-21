import React from 'react'
import { IoTrashBin } from "react-icons/io5";

const CartModal = ({cart, updateQuantity, removeItem, setIsCartOpen}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-end'>
        <div className='w-96 bg-white p-4'>
          <h2 className='text-xl m-4'>Shopping Cart</h2>
            <button onClick={() => setIsCartOpen(false)} className='text-red-500'>
              Close
            </button>

            {cart.length === 0 ? (
              <p className='text-center mt-4 '>Cart is Empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className='flex justify-between items-center my-2'>
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price} x {item.quantity}</p>
                  </div>
                  <div className='flex gap-2'>
                    <button onClick={() => updateQuantity(item.id, -1)} className='px-2 bg-gray-300'>-</button>
                    <button onClick={() => updateQuantity(item.id, 1)} className='px-2 bg-gray-300'>+</button>
                    <button onClick={() => removeItem(item.id)} className='text-red-500'><IoTrashBin /></button>
                  </div>
                </div>
              ))
            )}
          
          <h3 className='mt-4'>Total: ${total}</h3>
          <button className='bg-green-500 text-white w-full py-2 mt-2'>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default CartModal
