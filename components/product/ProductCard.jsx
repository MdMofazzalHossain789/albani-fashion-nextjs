import React from "react";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
import { Banknote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WishlistButton from "./WishlistButton";
import ProductBadge from "./ProductBadge";

const ProductCard = ({ id }) => {
  return (
    <div
      className="relative w-full border-1 border-black/30 rounded-md shadow-md group"
      id={id}
    >
      {/* Image */}
      <Link href={`/3-pcs/${id}`}>
        <div className="bg-gray-500 w-full h-[300px] rounded-t-md relative overflow-hidden">
          <Image
            src={"/product.png"}
            fill
            alt="Product Image"
            className="object-cover active:scale-125 hover:scale-125 transition duration-300"
          />
        </div>
      </Link>

      <div className="absolute top-4 -left-1 z-10 ">
        <ProductBadge />
      </div>

      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
        <WishlistButton />
      </div>

      {/* Product Info */}
      <div className="px-4 py-2">
        <Link href={`/3-pcs/${id}`}>
          <h1 className="text-lg font-semibold hover:underline">
            Product Name
          </h1>
        </Link>
        <div className="text-sm sm:text-md text-gray-600">
          <ul className="ml-4 list-disc">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-4 mt-2 sm:mt-4">
          <p className="text-lg sm:text-xl font-semibold">750 ৳</p>
          <p className="line-through opacity-70 font-medium">1400 ৳</p>
        </div>
      </div>
      <div className="px-2 pt-0 sm:py-2 flex flex-col gap-y-2 mb-2">
        <AddToCartButton />
        <BuyNowButton />
      </div>
    </div>
  );
};

export default ProductCard;
