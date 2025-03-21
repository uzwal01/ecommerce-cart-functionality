import React from "react";

const Productlist = ({ products, addToCart }) => {
  return (
    <>
      <div className="p-4 grid grid-cols-3 gap-4 ">
        {products.map((product) => (
          <div className="flex justify-center ">
            <div
              key={product.id}
              className="border p-4 text-center w-[250px] h-[250px] "
            >
              <h2 className="text-lg">{product.name}</h2>
              <p>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 mt-2"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Productlist;
