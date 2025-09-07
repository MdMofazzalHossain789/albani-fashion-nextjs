import React from "react";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
import { Banknote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WishlistButton from "./WishlistButton";
import ProductBadge from "./ProductBadge";

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    slug,
    regularPrice,
    sellingPrice,
    description,
    originalPrice,
    images,
    features,
    category,
    sizes,
    colors,
    stock,
  } = product;

  const savings = regularPrice - sellingPrice;

  return (
    <div
      className="relative w-full border-1 border-black/30 rounded-md shadow-md group flex flex-col"
      id={id}
    >
      {/* Image */}
      <Link href={`/panjabi/${slug}`}>
        <div className="bg-gray-500 w-full min-h-[30vh] rounded-t-md relative overflow-hidden">
          <Image
            src={images[0]}
            fill
            alt="Product Image"
            className="object-cover active:scale-125 hover:scale-125 transition duration-300"
          />
        </div>
      </Link>

      <div className="absolute top-4 -left-1 z-10 ">
        <ProductBadge savings={savings} />
      </div>

      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
        <WishlistButton />
      </div>

      {/* Product Info */}
      <div className="px-4 py-2">
        <Link href={`/panjabi/${slug}`}>
          <h1 className="sm:text-lg font-semibold hover:underline">{name}</h1>
        </Link>
        <div className="text-sm sm:text-md text-gray-600">
          <ul className="ml-4 list-disc">
            {features &&
              features.map((feature, index) => <li key={index}>{feature}</li>)}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-4 mt-2 sm:mt-4">
          <p className="text-lg sm:text-xl font-bold">{sellingPrice} ৳</p>
          <p className="line-through opacity-70 font-medium">
            {regularPrice} ৳
          </p>
        </div>
      </div>
      <div className="px-2 pt-0 sm:py-2 flex flex-col gap-y-2 mb-2 w-full">
        <BuyNowButton />
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCard;
