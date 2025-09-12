import React from "react";
import CartForm from "../billing-information/CartForm";
import MainSection from "@/components/shared/MainSection";
import Button from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";

const ShoppingCartPage = () => {
  return (
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
  );
};

export default ShoppingCartPage;
