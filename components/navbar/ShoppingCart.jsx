"use client";
import { ShoppingBag, ShoppingCartIcon } from "lucide-react";
import Button from "../shared/Button";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";

const ShoppingCart = () => {
  const { cart } = useCart();
  const router = useRouter();

  return (
    <Button
      className="relative"
      onClick={() => router.push("/checkout/shopping-cart")}
    >
      <ShoppingCartIcon />
      {cart.length > 0 && (
        <span className="absolute top-0 right-0 h-6 w-6 aspect-square text-white bg-black rounded-full">
          {cart.length}
        </span>
      )}
    </Button>
  );
};

export default ShoppingCart;
