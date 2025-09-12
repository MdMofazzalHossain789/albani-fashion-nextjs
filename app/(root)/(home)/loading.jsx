import MainSection from "@/components/shared/MainSection";
import ProductSectionSkeleton from "@/components/shared/skeleton/ProductSectionSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full pt-[72px]">
      <div className="w-full h-[70vh] bg-gray-500 animate-pulse"></div>
      <MainSection className="mt-0">
        <ProductSectionSkeleton title="Products" />
      </MainSection>
    </div>
  );
};

export default Loading;
