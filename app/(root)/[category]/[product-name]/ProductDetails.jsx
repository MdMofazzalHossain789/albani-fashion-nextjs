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
              src="/product.png"
              fill
              alt="Product Image"
              className="object-cover rounded-md"
            />
          </div>

          <div className="flex items-center gap-x-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="relative w-14 h-14">
                <Image
                  src={`/product.png`}
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
          <h1 className="text-xl md:text-2xl font-semibold">Product Name</h1>
          <div className="flex items-center gap-x-4 mt-2 sm:mt-4">
            <p className="line-through opacity-70 font-medium">1400৳</p>
            <p className="text-xl font-semibold">750 ৳</p>
          </div>
          <div className="mt-2 sm:mt-4 text-gray-600">
            <ul className="list-disc ml-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
          <div className="flex items-center gap-x-4 text-lg my-2">
            <h1 className="font-semibold">Brand:</h1>
            <p>Boutique</p>
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
      <div className="mt-4 px-4 py-2 text-lg">
        <h1 className="font-semibold">Description</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat,
        atque maxime facilis, recusandae minima nihil repudiandae totam error
        molestias reprehenderit ducimus sed! Laboriosam atque dolor dignissimos
        eligendi quibusdam. Doloremque! Fugiat praesentium repellat sed aut
        placeat! Aut alias velit dolores enim, sed illum sapiente quisquam
        perferendis pariatur odit, itaque facilis minima. Animi dolores maxime
        enim vero id possimus molestias praesentium. Quia cum magni deserunt
        earum! Doloribus dolore rem cumque nobis temporibus vitae consequatur
        amet est. Laboriosam quo consectetur mollitia, nihil nesciunt
        reprehenderit minus distinctio nobis? Quaerat dignissimos voluptatum
        ratione cumque.
      </div>
    </div>
  );
};

export default ProductDetails;
