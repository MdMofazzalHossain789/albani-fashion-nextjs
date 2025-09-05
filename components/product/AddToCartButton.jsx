import React from "react";
import Button from "../shared/Button";
import { ShoppingCart } from "lucide-react";

const AddToCartButton = () => {
  return (
    <Button
      variant="outline"
      className="font-semibold py-2 flex items-center gap-x-4 w-full justify-center"
    >
      <ShoppingCart />
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
