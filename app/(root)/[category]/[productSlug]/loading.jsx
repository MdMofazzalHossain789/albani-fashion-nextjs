import MainSection from "@/components/shared/MainSection";
import Seperator from "@/components/shared/Seperator";
import ProductSectionSkeleton from "@/components/shared/skeleton/ProductSectionSkeleton";
import { HomeIcon, ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-slate-100 py-4">
        <MainSection>
          <div className="flex items-center gap-x-2 font-medium text-gray-600 animate-pulse px-4">
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

        <ProductSectionSkeleton title="Related Products" />
      </MainSection>
    </div>
  );
};

export default Loading;
