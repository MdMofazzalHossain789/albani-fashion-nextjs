import ProductCardList from "@/components/product/ProductCardList";
import MainSection from "@/components/shared/MainSection";
import React from "react";

const CategoryPage = ({ products, categorySlug }) => {
  return (
    <div className="w-full h-full">
      <MainSection className="px-4">
        <h1 className="title Capitalize my-4 md:my-10">
          Products By Category: {categorySlug}
        </h1>

        <ProductCardList products={products} categorySlug={categorySlug} />
      </MainSection>
    </div>
  );
};

export default CategoryPage;
