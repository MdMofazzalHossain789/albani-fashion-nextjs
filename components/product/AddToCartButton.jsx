"use client";
import { useCart } from "@/hooks/useCart";
import Button from "../shared/Button";
import { CheckLine, ShoppingCart } from "lucide-react";
import { useState } from "react";

const AddToCartButton = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleClick = () => {
    if (isAdded) {
      return;
    }

    addToCart(data);
    setIsAdded(true);
    // reset after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <Button
      variant="outline"
      className="text-sm sm:text-md font-semibold !py-2 flex items-center gap-x-4 w-full justify-center rounded-sm"
      onClick={handleClick}
    >
      {isAdded ? (
        <>
          <CheckLine className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
          Add to Cart
        </>
      )}
    </Button>
  );
};

export default AddToCartButton;
