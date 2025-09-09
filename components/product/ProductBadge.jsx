import React from "react";

const ProductBadge = ({ prices }) => {
  const { sellingPrice, regularPrice } = prices;

  const savings = regularPrice - sellingPrice;

  if (savings <= 0) {
    return;
  }

  return (
    <div className="bg-black text-white font-semibold text-[10px] sm:text-xs  rounded-l-md rounded-r-full px-4 py-1">
      Save {savings} tk
    </div>
  );
};

export default ProductBadge;
