import MainSection from "@/components/shared/MainSection";
import SitePath from "@/components/shared/SitePath";
import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedSection from "./RelatedSection";

const SingleProductPage = ({ slug }) => {
  return (
    <div className="w-full h-full bg-slate-100">
      <MainSection className="py-1 md:py-2">
        <SitePath />
      </MainSection>
      <div className="w-full bg-white">
        <MainSection className="mt-0">
          <ProductDetails />

          <RelatedSection />
        </MainSection>
      </div>
    </div>
  );
};

export default SingleProductPage;
