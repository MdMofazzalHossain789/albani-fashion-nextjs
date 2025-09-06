import MainSection from "@/components/shared/MainSection";
import SitePath from "@/components/shared/SitePath";
import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedSection from "./RelatedSection";

const SingleProductPage = ({ slug }) => {
  return (
    <div className="w-full h-full bg-slate-100">
      <MainSection>
        <SitePath />
      </MainSection>
      <div className="w-full bg-white">
        <MainSection>
          <ProductDetails />

          <RelatedSection />
        </MainSection>
      </div>
    </div>
  );
};

export default SingleProductPage;
