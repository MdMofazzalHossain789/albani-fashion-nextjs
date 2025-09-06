import React from "react";
import Button from "../shared/Button";
import { ShoppingCart } from "lucide-react";

const AddToCartButton = () => {
  return (
    <Button
      variant="outline"
      className="text-sm sm:text-md font-semibold !py-2 flex items-center gap-x-4 w-full justify-center rounded-sm"
    >
      <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
