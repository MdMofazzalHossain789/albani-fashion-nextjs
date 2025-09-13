"use client";
import { useCart } from "@/hooks/useCart";
import Button from "../shared/Button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

const BuyNowButton = ({ data }) => {
  const router = useRouter();
  const { cart, addToCart } = useCart();

  return (
    <Button
      variant="primary"
      className="text-sm sm:text-md font-semibold w-full flex items-center justify-center !py-2 gap-x-4 rounded-sm"
      onClick={() => {
        if (cart.length > 0) {
          const productExists = cart.some((item) => item.id === data.id);

          if (productExists) {
            router.push("/checkout/billing-information");
            return;
          }
        }
        addToCart(data);
        router.push("/checkout/billing-information");
      }}
    >
      <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
