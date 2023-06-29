import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsList = ({ productos }) => {
  return (
    <div className="product-container ">
      {productos.map((producto) => (
        <Link
          className="bg-gray-200 p-4 mb-4 rounded-lg"
          href={`/producto/${producto.name}`}
          key={producto._id}
        >
          <Image
            src={producto.image}
            alt={producto.name}
            width="150"
            height="150"
            className="m-auto mb-4 w-full rounded-xl"
          />
          <div className="flex justify-between items-center">
            <p className="font-bold">{producto.name}</p>
            <p className="precio-item text-2xl">${producto.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
