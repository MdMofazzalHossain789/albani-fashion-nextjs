"use client";

import useSWR from "swr";

const getLocalStorageItem = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (err) {
    return fallback;
  }
};

export const useCart = () => {
  const { data: cart, mutate } = useSWR("cart", () =>
    getLocalStorageItem("cart", [])
  );

  const addToCart = (item) => {
    let updatedCart;

    // check if item already exists
    const existingItem = (cart || []).find((i) => i.id === item.id);

    if (existingItem) {
      // increment quantity
      updatedCart = (cart || []).map((i) =>
        i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
      );
    } else {
      // add new item with quantity = 1
      updatedCart = [...(cart || []), { ...item, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    mutate(updatedCart, false);
  };

  // ✅ remove by id
  const removeFromCart = (id) => {
    const updatedCart = (cart || []).filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    mutate(updatedCart, false);
  };

  // ✅ decrement by id
  const decrementQuantity = (id) => {
    const updatedCart = (cart || [])
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return null; // remove if quantity becomes 0
        }
        return item;
      })
      .filter(Boolean);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    mutate(updatedCart, false);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    mutate([], false);
  };

  return {
    cart: cart || [],
    addToCart,
    removeFromCart,
    clearCart,
    decrementQuantity,
  };
};
