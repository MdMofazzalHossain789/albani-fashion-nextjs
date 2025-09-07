import MainSection from "@/components/shared/MainSection";
import SitePath from "@/components/shared/SitePath";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="w-full h-full pt-[72px]">
      <div className="bg-slate-100">
        <MainSection className="!mt-0">
          <SitePath />
        </MainSection>
      </div>
      <MainSection>Checkout Page</MainSection>
    </div>
  );
};

export default CheckoutPage;
