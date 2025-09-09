import MainSection from "@/components/shared/MainSection";
import SitePath from "@/components/shared/SitePath";
import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedSection from "./RelatedSection";

const getData = async (productSlug) => {
  const res = await fetch(
    `https://api.believerssign.com.bd/api/v1/product/admin-customer/view-with-similar/${productSlug}?similarLimit=10`,
    {
      cache: "no-store", // or "force-cache"
    }
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return { data: null };
  }

  return res.json();
};

const SingleProductPage = async ({ category, productSlug }) => {
  const { data } = await getData(productSlug);

  return (
    <div className="w-full h-full bg-slate-100">
      <MainSection className="py-1 md:py-2">
        <SitePath paths={[category, data.name]} />
      </MainSection>
      <div className="w-full bg-white">
        <MainSection className="mt-0">
          <ProductDetails product={data} />

          <RelatedSection
            products={data.similarProducts}
            categorySlug={category}
          />
        </MainSection>
      </div>
    </div>
  );
};

export default SingleProductPage;
