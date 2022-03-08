import React, { useRef } from 'react';

import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

const Cart = ({
  setIsShowCart,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const cartRef = useRef();
  const total = (arr) => {
    return arr.reduce((cal, item) => {
      return cal + item.price * item.amount;
    }, 0);
  };

  const DollarUsd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleCloseCart = () => {
    cartRef.current.classList.remove('animate-fade-in');
    cartRef.current.classList.add('animate-fade-out');
    setTimeout(() => {
      setIsShowCart(false);
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"
      onClick={handleCloseCart}
    >
      <div
        ref={cartRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[250px] h-full absolute right-0 overflow-y-scroll animate-fade-in "
      >
        <h1 className="bg-red-400 py-2 text-center text-white">Cart</h1>
        <div className="flex flex-col items-center px-2 py-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="text-center border-b-[3px] w-full mb-2 flex flex-col items-center"
            >
              <img
                className="w-[100px] h-[100px]"
                src={item.img}
                alt={item.name}
              />
              <p className="text-white font-bold w-6 h-6 rounded-full bg-blue-700">
                {item.amount}
              </p>
              <h3 className="text-[0.8rem]">{item.name}</h3>
              <div className="flex items-center my-2">
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  <AiOutlineMinusSquare className="text-[30px] text-gray-500" />
                </button>
                <p className="text-red-600 mx-2">
                  {DollarUsd.format(item.price)}
                </p>
                <button onClick={() => handleAddToCart(item)}>
                  <AiOutlinePlusSquare className="text-[30px] text-gray-500" />
                </button>
              </div>
            </div>
          ))}
          {cart.length > 0 && <p>Total: {DollarUsd.format(total(cart))} </p>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
