import { ShoppingBag, ShoppingCart } from "lucide-react";
import MainSection from "../MainSection";
import Seperator from "../Seperator";

const ProductSectionSkeleton = ({ noTitle, title = "Section Title" }) => {
  return (
    <div className="px-4 py-2 mt-10">
      {!noTitle && (
        <div className="flex items-center gap-x-4 mb-4">
          <h1
            className="text-xl 
          font-semibold uppercase shrink-0 text-gray-500 animate-pulse"
          >
            {title}
          </h1>
          <Seperator />
        </div>
      )}
      {/* <ProductCardList products={products} categorySlug={categorySlug} /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((product, index) => (
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
  );
};

export default ProductSectionSkeleton;
