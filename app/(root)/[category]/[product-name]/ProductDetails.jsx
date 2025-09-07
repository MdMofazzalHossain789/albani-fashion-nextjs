import Button from "@/components/shared/Button";
import Image from "next/image";
import React from "react";
import ToggleButton from "./ToggleButton";
import Quantity from "./Quantity";
import Status from "./Status";
import AddToCartButton from "@/components/product/AddToCartButton";
import BuyNowButton from "@/components/product/BuyNowButton";

const ProductDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-20 gap-y-4 mt-4 px-4">
        {/* Image Preview */}
        <div className="flex flex-col gap-y-4 w-full">
          <div className="relative w-full h-[55vh]">
            <Image
              src="/panjabi/p11.png"
              fill
              alt="Product Image"
              className="object-cover rounded-md"
            />
          </div>

          <div className="flex items-center gap-x-4">
            {["p11", "p12", "p13"].map((item, index) => (
              <div key={index} className="relative w-14 h-14 cursor-pointer">
                <Image
                  src={`/panjabi/${item}.png`}
                  fill
                  alt="product image"
                  className="object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full sm:p-4">
          <h1 className="text-xl md:text-2xl font-semibold">
            Printed Panjabi - 501
          </h1>
          <div className="flex items-center gap-x-4 mt-2 sm:mt-4">
            <p className="line-through opacity-70 font-medium">1400৳</p>
            <p className="text-xl font-semibold">750 ৳</p>
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

          <Status />

          <ToggleButton />

          <Quantity />
          <div className="flex items-center gap-x-4 my-4">
            <AddToCartButton />
            <BuyNowButton />
          </div>
        </div>
      </div>

      {/* Product Elaborate Description */}
      <div className="mt-4 px-4 py-2 text-lg flex flex-col gap-y-4">
        <h1 className="font-semibold">Description</h1>
        <p>
          A stylish black Panjabi with textured design for an exclusive look.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
