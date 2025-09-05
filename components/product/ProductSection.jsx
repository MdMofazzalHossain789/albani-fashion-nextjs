import React from "react";
import ProductCardList from "./ProductCardList";
import Button from "../shared/Button";
import Seperator from "../shared/Seperator";

const ProductSection = ({ title = "Section Title", showLink, fetchLink }) => {
  return (
    <div className="my-4 px-4">
      <div className="flex items-center gap-x-4 mt-6 mb-4">
        <h1 className="text-2xl font-semibold uppercase shrink-0">{title}</h1>
        <Seperator />
        <Button
          variant="primary"
          className="px-4 py-2 shrink-0"
          href={"/showLink"}
        >
          Show All
        </Button>
      </div>
      <ProductCardList />
    </div>
  );
};

export default ProductSection;
