import MainSection from "@/components/shared/MainSection";
import ProductSectionSkeleton from "@/components/shared/skeleton/ProductSectionSkeleton";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full pt-[60px]">
      <MainSection className="mt-0">
        <ProductSectionSkeleton title="Title" />
      </MainSection>
    </div>
  );
};

export default page;
