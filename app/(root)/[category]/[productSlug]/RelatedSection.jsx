import ProductCardList from "@/components/product/ProductCardList";
import MainSection from "@/components/shared/MainSection";
import Seperator from "@/components/shared/Seperator";
import React from "react";

const RelatedSection = ({ products, categorySlug }) => {
  return (
    <MainSection className="mt-4">
      <div className="px-4 py-2">
        <div className="flex items-center gap-x-4 mb-4">
          <h1
            className="text-xl 
        font-semibold uppercase shrink-0"
          >
            Related Products
          </h1>
          <Seperator />
        </div>
        <ProductCardList products={products} categorySlug={categorySlug} />
      </div>
    </MainSection>
  );
};

export default RelatedSection;
