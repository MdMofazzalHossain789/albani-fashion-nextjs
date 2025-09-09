import React from "react";
import ProductCardList from "./ProductCardList";
import Button from "../shared/Button";
import Seperator from "../shared/Seperator";
import { ArrowRight, MoveRight } from "lucide-react";

const ProductSection = ({
  title = "Section Title",
  showLink,
  fetchLink,
  categorySlug,
  products = [],
}) => {
  return (
    <div className="my-4 px-4">
      <div className="flex items-center gap-x-4 mt-6 mb-4 mx-2">
        <h1 className="text-xl sm:text-2xl font-semibold uppercase shrink-0">
          {title}
        </h1>
        <Seperator />
        <Button
          variant="primary"
          className="text-sm sm:text-md px-4 py-2 shrink-0"
          href={"/showLink"}
        >
          Show All
        </Button>
      </div>
      <ProductCardList products={products} categorySlug={categorySlug} />

      <div className="w-full my-4 pt-2">
        <Button
          className="flex items-center justify-center gap-x-4 font-semibold w-full rounded-md !py-2"
          variant="outline"
        >
          Show More {title}
          <MoveRight />
        </Button>
      </div>
    </div>
  );
};

export default ProductSection;
