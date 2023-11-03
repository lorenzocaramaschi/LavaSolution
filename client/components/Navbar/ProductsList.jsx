import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsList = ({ productos }) => {
  return (
    <div className="container">
      {productos.map((producto) => (
        <Link className="flex flex-col justify-center items-center m-auto mt-10" href={`/producto/${producto.name}`} key={producto._id}>
          <Image
          className="bg-dsblue p-4 rounded-xl"
            src={producto.image}
            alt={producto.name}
            width={350}
            height={350}
          />
          <div className="flex flex-row items-center justify-between mt-2">
            <p>{producto.name}</p>
            <p className="text-white bg-aqblue ml-4 p-1 rounded-sm">${producto.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
