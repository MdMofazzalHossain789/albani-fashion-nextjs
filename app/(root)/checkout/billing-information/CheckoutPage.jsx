import MainSection from "@/components/shared/MainSection";
import SitePath from "@/components/shared/SitePath";
import React from "react";
import BillingForm from "./BillingForm";
import CartForm from "./CartForm";
import Button from "@/components/shared/Button";
import { ArrowLeft } from "lucide-react";

const CheckoutPage = () => {
  return (
    <div className="w-full h-full pt-[72px] min-h-[70vh]">
      <div className="bg-slate-100">
        <MainSection className="!mt-0">
          <SitePath
            paths={[
              { name: "Home", link: "/" },
              { name: "Shopping Cart", link: "checkout/shopping-cart" },
              { name: "Billing Information" },
            ]}
          />
        </MainSection>
      </div>
      <MainSection className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10">
          <div>
            <div className="mb-4">
              <h1 className="title">Billing Information</h1>
              <p className="text-gray-800 font-medium my-2">
                Kindly fill the details below to checkout
              </p>
            </div>

            <BillingForm />
          </div>
          <Button
            variant="outline"
            className="rounded-md font-semibold md:hidden"
            href={`/checkout/shopping-cart`}
          >
            <ArrowLeft />
            Go to Shopping Cart
          </Button>
          <div className="hidden md:block border-0 md:border-l-2 pl-10 border-black/10">
            <CartForm />
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default CheckoutPage;
