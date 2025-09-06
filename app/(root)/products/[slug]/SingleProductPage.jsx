import MainSection from "@/components/shared/MainSection";
import SitePath from "@/components/shared/SitePath";
import React from "react";

const SingleProductPage = ({ slug }) => {
  return (
    <div className="w-full h-full bg-slate-100">
      <MainSection>
        <SitePath />
      </MainSection>
    </div>
  );
};

export default SingleProductPage;
