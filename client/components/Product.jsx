import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">{product.name}</h1>
      <Image
        className="w-full p-10 rounded-xl bg-gray-200 my-4"
        src={product.image}
        alt={product.name}
        width={197}
        height={197}
      />
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-3xl">${product.price}</p>
        <div className="text-2xl font-bold border-black border-2 p-2 rounded-lg">
          {product.stock > 0 ? (
            <p>Stock: {product.stock}</p>
          ) : (
            <p className="text-red-700">Sin stock</p>
          )}
        </div>
      </div>
      <p className="font-bold text-base mb-4">{product.desc}</p>
    </div>
  );
};

export default Product;
