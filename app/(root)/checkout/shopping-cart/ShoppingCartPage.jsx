import React from "react";
import CartForm from "../billing-information/CartForm";
import MainSection from "@/components/shared/MainSection";
import Button from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";
import SitePath from "@/components/shared/SitePath";

const ShoppingCartPage = () => {
  return (
    <div className="w-full h-full pt-[96px] md:pt-[110px]">
      <div className="bg-slate-100">
        <MainSection className="!mt-0">
          <SitePath
            paths={[
              { name: "Home", link: "/" },
              { name: "Shopping Cart", link: "" },
              {
                name: "Billing Information",
                link: "checkout/billing-information",
              },
            ]}
          />
        </MainSection>
      </div>

      <MainSection className="px-6 max-w-[700px] mx-auto">
        <CartForm />
        <Button
          variant="primary"
          className="w-full rounded-md font-semibold my-4 max-w-[700px] mx-auto"
          href="/checkout/billing-information"
        >
          Continue
          <ArrowRight />
        </Button>
      </MainSection>
    </div>
  );
};

export default ShoppingCartPage;
