"use client";
import Button from "@/components/shared/Button";
import Image from "next/image";
import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import Quantity from "./Quantity";
import Status from "./Status";
import AddToCartButton from "@/components/product/AddToCartButton";
import BuyNowButton from "@/components/product/BuyNowButton";
import Seperator from "@/components/shared/Seperator";
import Gallery from "./Gallery";

const ProductDetails = ({ product }) => {
  const {
    galleryImage,
    name,
    sku,
    slug,
    variations,
    nonVariation,
    isVariant,
    description,
    unit,
  } = product;

  console.log(product);

  const [price, setPrice] = useState(
    isVariant
      ? {
          sellingPrice: variations[0].sellingPrice,
          regularPrice: variations[0].regularPrice,
        }
      : {
          sellingPrice: nonVariation.sellingPrice,
          regularPrice: nonVariation.regularPrice,
        }
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-20 gap-y-4 mt-4 px-4">
        {/* Image Preview */}
        <Gallery galleryImage={galleryImage} />

        {/* Product Info */}
        <div className="w-full sm:p-4">
          <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
          <p className="text-md md:text-lg font-semibold text-gray-700 my-2 md:my-4">
            SKU: {sku}
          </p>
          <div className="flex items-center gap-x-4 mt-2 sm:mt-4">
            <p className="line-through opacity-70 font-medium">
              {price.regularPrice} ৳
            </p>
            <p className="text-xl font-semibold">{price.sellingPrice} ৳</p>
          </div>
          {/* <div className="mt-2 sm:mt-4 text-gray-600">
            <ul className="list-disc ml-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div> */}
          <div className="flex items-center gap-x-4 text-lg my-2">
            <h1 className="font-semibold">Quality:</h1>
            <p>Fine Cotton</p>
          </div>

          {/* <Status /> */}
          {/* {isVariant && <ToggleButton variations={variations} />} */}

          <Quantity
            isVariant={isVariant}
            variations={variations}
            nonVariation={nonVariation}
            setPrice={setPrice}
          />
          <div className="flex items-center gap-x-4 my-4">
            <AddToCartButton />
            <BuyNowButton />
          </div>
        </div>
      </div>

      {/* Product Elaborate Description */}

      <div className="mt-4 md:mt-10 px-4 py-2 text-lg flex flex-col gap-y-4">
        <h1 className="font-semibold">Description</h1>
        <Seperator />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default ProductDetails;
