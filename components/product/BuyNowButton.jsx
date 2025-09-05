import React from "react";
import Button from "../shared/Button";
import { ShoppingBag } from "lucide-react";

const BuyNowButton = () => {
  return (
    <Button
      variant="primary"
      className="font-semibold w-full flex items-center justify-center py-2 gap-x-4"
    >
      <ShoppingBag />
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
