import MainSection from "@/components/shared/MainSection";
import Seperator from "@/components/shared/Seperator";
import { HomeIcon, ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-slate-100 py-4">
        <MainSection>
          <div className="flex items-center gap-x-2 font-medium text-gray-600 animate-pulse">
            <HomeIcon className="w-5 h-5" />
            Home
            <p>/</p>
          </div>
        </MainSection>
      </div>

      <MainSection className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-20 gap-y-4 mt-4 px-4">
          <div className="flex flex-col gap-y-4 w-full">
            <div className="relative w-full h-[55vh] md:h-[70vh] skeleton"></div>

            <div className="flex items-center gap-x-4">
              {[1, 2, 3].map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      "relative w-14 h-14 overflow-hidden border-2 border-transparent transition duration-300 skeleton"
                    }
                  ></div>
                );
              })}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full sm:p-4">
            <h1 className="text-xl md:text-2xl font-semibold h-8 w-[50%] skeleton"></h1>
            <div className="flex items-center gap-x-4">
              <p className="text-md md:text-lg font-semibold text-gray-700 my-2 md:my-4">
                SKU:{" "}
              </p>
              <span className="skeleton w-[20%]  h-6"></span>
            </div>
            <div className="flex items-center gap-x-4 text-gray-500 animate-pulse">
              <p className="line-through opacity-70 font-medium">৳৳৳৳</p>
              <p className="text-xl font-semibold">৳৳৳৳</p>
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
              <p className="skeleton w-[10%] h-6"></p>
            </div>

            {/* <Status /> */}
            <div className="flex items-center gap-x-4 text-lg my-2">
              <h1 className="font-semibold">Status:</h1>
              <div className="skeleton w-[20%] h-6"></div>
            </div>
            {/* {isVariant && <ToggleButton variations={variations} />} */}
            <div className="flex items-center gap-x-4 text-lg my-5">
              <h1 className="font-semibold">Available:</h1>

              {[1, 2, 3].map((variation, index) => (
                <div
                  className="px-3 rounded-sm py-4 text-sm skeleton h-6 w-[10%]"
                  key={variation}
                ></div>
              ))}
            </div>
            {/* <Quantity /> */}
            <div className="flex items-center gap-x-4 text-lg my-6 w-full">
              <h1 className="font-semibold">Quantity:</h1>

              <div className="w-[30%] h-6 skeleton"></div>
            </div>
            <div className="flex items-center gap-x-4 my-4 py-4">
              {/* <AddToCartButton /> */}
              <div className="text-sm sm:text-md font-semibold !py-2 flex items-center gap-x-4 w-full justify-center rounded-sm border-1 text-gray-500 border-gray-500 animate-pulse">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                Add to Cart
              </div>
              {/* <BuyNowButton /> */}
              <div className="text-sm sm:text-md font-semibold !py-2 flex items-center gap-x-4 w-full justify-center rounded-sm border-1 text-white border-gray-500 animate-pulse bg-gray-500 ">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                Add to Cart
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-2 mt-10">
          <div className="flex items-center gap-x-4 mb-4">
            <h1
              className="text-xl 
        font-semibold uppercase shrink-0 text-gray-500 animate-pulse"
            >
              Related Products
            </h1>
            <Seperator />
          </div>
          {/* <ProductCardList products={products} categorySlug={categorySlug} /> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, index) => (
              <div
                className="relative w-full border-1 border-gray-500 rounded-md shadow-md group flex flex-col animate-pulse"
                key={index}
              >
                {/* Image */}
                <div>
                  <div className="bg-gray-500 w-full min-h-[30vh] rounded-t-md relative overflow-hidden"></div>
                </div>

                <div className="absolute top-4 -left-1 z-10 ">
                  {/* <ProductBadge prices={{ sellingPrice, regularPrice }} /> */}
                </div>

                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                  {/* <WishlistButton /> */}
                </div>

                {/* Product Info */}
                <div className="px-4 py-2">
                  <div>
                    <div className="sm:text-lg font-semibold hover:underline w-[50%] h-6 skeleton"></div>
                  </div>

                  {/*     
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-4 mt-2 sm:mt-4">
          <p className="text-lg sm:text-xl font-bold">{sellingPrice} ৳</p>
          {regularPrice !== sellingPrice && (
            <p className="line-through opacity-70 font-medium">
              {regularPrice} ৳
            </p>
          )}
        </div> */}
                </div>
                <div className="px-2 pt-0 sm:py-2 flex flex-col gap-y-2 mb-2 w-full">
                  {/* <AddToCartButton /> */}
                  <div className="text-sm sm:text-md font-semibold !py-2 flex items-center gap-x-4 w-full justify-center rounded-sm border-1 text-gray-500 border-gray-500 animate-pulse">
                    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                    Add to Cart
                  </div>
                  {/* <BuyNowButton /> */}
                  <div className="text-sm sm:text-md font-semibold !py-2 flex items-center gap-x-4 w-full justify-center rounded-sm border-1 text-white border-gray-500 animate-pulse bg-gray-500 ">
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                    Add to Cart
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default Loading;
