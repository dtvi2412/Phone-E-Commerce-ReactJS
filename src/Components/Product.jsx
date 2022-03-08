import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  const DollarUsd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="flex-1 flex flex-col self-stretch items-center min-w-[250px] border-2 border-['lightgray'] px-2 mr-2 mb-2 rounded-lg">
      <div className="w-[100px]">
        <img className="w-full h-full" src={product.img} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p className="text-red-700 font-bold">
        {DollarUsd.format(product.price)}
      </p>
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-gray-300 w-full rounded-lg py-1 mt-auto mb-2 hover:bg-gray-500 hover:text-white"
      >
        Buy now
      </button>
    </div>
  );
};

export default Product;
