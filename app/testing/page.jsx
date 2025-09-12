"use client";

import { useCart } from "@/hooks/useCart";

export default function CartComponent() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Shopping Cart ({cart.length})</h2>
      <button
        onClick={() =>
          addToCart({ id: Date.now(), name: "Product " + cart.length })
        }
      >
        ➕ Add Item
      </button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => removeFromCart(item.id)}>❌ Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
