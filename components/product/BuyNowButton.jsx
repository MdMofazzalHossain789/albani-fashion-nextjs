import React from "react";
import Button from "../shared/Button";
import { ShoppingBag } from "lucide-react";

const BuyNowButton = () => {
  return (
    <Button
      variant="primary"
      className="text-sm sm:text-md font-semibold w-full flex items-center justify-center !py-2 gap-x-4 rounded-sm"
      href={`/checkout`}
    >
      <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
