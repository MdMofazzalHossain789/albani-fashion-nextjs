import React from "react";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";

const ProductCard = () => {
  return (
    <div className="w-full border-1 border-black/30 rounded-md shadow-md">
      {/* Image */}
      <div className="bg-gray-500 w-full h-[250px]"></div>
      {/* Product Info */}
      <div className="px-4 py-2">
        <h1 className="text-lg font-semibold">Product Name</h1>
        <p className="text-gray-600">Product Description</p>
      </div>
      <div className="px-4 py-2 flex flex-col gap-y-2 mb-2">
        <AddToCartButton />
        <BuyNowButton />
      </div>
    </div>
  );
};

export default ProductCard;
