import { WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product }) => {
  return (
    <div className="pt-24">
      <h1 className=" font-bold text-5xl text-center mb-10 lg:text-[72px]">{product.name}</h1>
      <div className="lg:flex lg:flex-row">
        <Image
          className="m-auto bg-aqblue p-10 rounded-lg w-[100%] lg:w-[30%] mb-5"
          src={product.image}
          alt={product.name}
          width={197}
          height={197}
        />
        <div className="flex flex-col lg:ml-4">
          <div className="flex justify-between items-center">
            <p className="bg-aqblue p-2 rounded-md text-white text-[40px] lg:text-[52px]">${product.price}</p>
            <div>
              {product.stock > 0 ? (
                <p className="p-1 border-solid border-2 border-black rounded-md text-[20px] lg:text-[36px]">
                  Stock: {product.stock}
                </p>
              ) : (
                <p className="p-1 bg-[#FF6B6B] text-white rounded-md text-[20px] lg:text-[36px]">
                  Sin stock
                </p>
              )}
            </div>
          </div>

          <p className="mt-6 bg-dsblue text-white p-6 text-[24px]">{product.desc}</p>
        </div>
      </div>

      <Link
        href={"wa.link/k4c5mc"}
        target="_blank"
        className="bg-dsblue p-4 my-4 text-white flex items-center justify-between w-[70%] lg:w-[20%]"
      >
        <WhatsApp className="text-white" />
        <p>Contactar al vendedor</p>
      </Link>
    </div>
  );
};

export default Product;
