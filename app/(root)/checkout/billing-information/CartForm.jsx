"use client";
import Button from "@/components/shared/Button";
import {
  ArrowRight,
  Check,
  Circle,
  CircleCheck,
  CircleSmall,
  Cross,
  Radio,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
const ProductCart = ({ product, removeFn, noQuantity }) => {
  const { cart, addToCart, removeFromCart, decrementQuantity } = useCart();
  const router = useRouter();

  return (
    <div className="flex items-center gap-x-4 w-full">
      <div className="shrink-0">
        <Image
          src={`https://api.believerssign.com.bd/${product.galleryImage[0]}`}
          width={100}
          height={100}
          alt="product image"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="shrink-0 line-clamp-1">{product.name}</h1>
        <p className="text-gray-600">Size: M</p>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-4">
            <p>Qty:</p>
            {noQuantity ? (
              <p>{product.quantity}</p>
            ) : (
              <div className="flex items-center rounded-md">
                <Button
                  className="rounded-sm border-r-0 rounded-r-none px-4"
                  variant="outline"
                  onClick={() => {
                    if (product.quantity === 1) {
                      removeFromCart(product.id);

                      router.push("/");
                      return;
                    }

                    decrementQuantity(product.id);
                  }}
                >
                  -
                </Button>
                <form className="w-1/5">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={() => {}}
                    className="w-full rounded-none border-1 border-black/30 p-2 sm:p-4 text-center selection:bg-black selection:text-white"
                  />
                </form>
                <Button
                  className="py-2 border-l-0 rounded-l-none rounded-r-sm px-4"
                  variant="outline"
                  onClick={() => {
                    if (product.quantity >= product.stock) return;

                    addToCart({
                      id: product.id,
                    });
                  }}
                >
                  +
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="shrink-0 flex flex-col">
        <div className="self-end flex flex-col">
          <p className="self-end">Price</p>
          <p className="text-black font-semibold">{product.sellingPrice} ৳</p>
        </div>
        <Button
          variant="outline"
          className="rounded-md font-semibold pr-4 text-xs"
          onClick={() => {
            if (cart.length === 1) {
              removeFn(product.id);
              router.push("/");
            }
            removeFn(product.id);
          }}
        >
          <X className="w-3 h-3" />
          Remove
        </Button>
      </div>
    </div>
  );
};

const CartForm = ({ noQuantity }) => {
  const { cart, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);

  // calculate total whenever cart changes
  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, product) => acc + product.sellingPrice * (product.quantity || 1),
      0
    );
    setTotal(newTotal);
  }, [cart]);

  return (
    <div className="">
      <div className="mt-6 md:mt-10">
        <h1 className="title">Shopping Cart</h1>
        <p className="text-gray-800 font-medium my-2">
          Kindly check the details below to checkout
        </p>
      </div>
      <div className="max-w-[700px] mx-auto">
        <div className="flex flex-col gap-y-4 max-w-[700px] mx-auto mt-4">
          {cart.map((product, index) => (
            <ProductCart
              key={product.id}
              product={product}
              removeFn={removeFromCart}
              noQuantity={noQuantity}
            />
          ))}
        </div>
        <div className="w-full h-[2px] rounded-md bg-black mt-4"></div>
        <div className="flex flex-col gap-y-2 mt-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-medium">Sub-total (+)</p>
            <p className="font-semibold text-black">{total} ৳</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <CircleCheck />
              <p className="text-gray-600 font-medium">Cash on Delivery</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-medium">Delivery Charge (+)</p>
            <p className="font-semibold text-black">120 ৳</p>
          </div>
          <div className="w-full h-[2px] rounded-md bg-black mt-4"></div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-medium">Total Amount</p>
            <p className="font-semibold text-black">{total + 120} ৳</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
