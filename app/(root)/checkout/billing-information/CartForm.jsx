"use client";
import Button from "@/components/shared/Button";
import { ArrowRight, Cross, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Quantity from "../../[category]/[product-name]/Quantity";

const ProductCart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(quantity));
  };

  const handleChange = (e) => {
    if (e.target.value <= 0) {
      setQuantity(1);
      return;
    }

    setQuantity(e.target.value);
  };

  return (
    <div className="flex items-center gap-x-4 w-full">
      <div className="shrink-0">
        <Image
          src={"/panjabi/p11.png"}
          width={100}
          height={100}
          alt="product image"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col w-full">
        <h1>Panjabi - 501</h1>
        <p className="text-gray-600">Size: M</p>
        <div className="flex items-center gap-x-2">
          <h1 className="">Qty:</h1>
          <div className="flex items-center rounded-md">
            <Button
              className="rounded-sm border-r-0 rounded-r-none p-1 px-2"
              variant="outline"
              onClick={() => {
                if (quantity <= 1) return;
                setQuantity(quantity - 1);
              }}
            >
              -
            </Button>
            <form onSubmit={handleSubmit} className="w-1/5">
              <input
                type="number"
                value={quantity}
                onChange={handleChange}
                className="w-full rounded-none border-1 border-black/30 p-1 sm:p-4 text-center selection:bg-black selection:text-white"
              />
            </form>
            <Button
              className="border-l-0 rounded-l-none rounded-r-sm p-1 px-2"
              variant="outline"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
      <div className="shrink-0 flex flex-col">
        <div className="self-end flex flex-col">
          <p className="self-end">Price</p>
          <p className="text-black font-semibold">₹ 1900</p>
        </div>
        <Button
          variant="outline"
          className="rounded-md font-semibold pr-4 text-xs"
        >
          <X className="w-3 h-3" />
          Remove
        </Button>
      </div>
    </div>
  );
};

const CartForm = () => {
  return (
    <div>
      <div>
        <h1 className="title">Shopping Cart</h1>
        <p className="text-gray-800 font-medium my-2">
          Kindly check the details below to checkout
        </p>
      </div>

      <div className="flex flex-col gap-y-4">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
      <div className="w-full h-[2px] rounded-md bg-black mt-4"></div>
      <div className="flex flex-col gap-y-2 mt-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Sub-total (+)</p>
          <p className="font-semibold text-black">₹ 1900</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Delivery Charge (+)</p>
          <p className="font-semibold text-black">₹ 1900</p>
        </div>
        <div className="w-full h-[2px] rounded-md bg-black mt-4"></div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Total</p>
          <p className="font-semibold text-black">₹ 1900</p>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
