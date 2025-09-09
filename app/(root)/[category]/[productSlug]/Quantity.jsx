"use client";
import Button from "@/components/shared/Button";
import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(quantity));
  };

  const handleChange = (e) => {
    if (e.target.value <= 0) {
      setQuantity(1);
      return;
    }

    setQuantity(e.target.value);
  };

  return (
    <div className="flex items-center gap-x-4 text-lg my-2">
      <h1 className="font-semibold">Quantity:</h1>
      <div className="flex items-center rounded-md">
        <Button
          className="rounded-sm border-r-0 rounded-r-none px-4"
          variant="outline"
          onClick={() => {
            if (quantity <= 1) return;
            setQuantity(quantity - 1);
          }}
        >
          -
        </Button>
        <form onSubmit={handleSubmit} className="w-1/5">
          <input
            type="number"
            value={quantity}
            onChange={handleChange}
            className="w-full rounded-none border-1 border-black/30 p-2 sm:p-4 text-center selection:bg-black selection:text-white"
          />
        </form>
        <Button
          className="py-2 border-l-0 rounded-l-none rounded-r-sm px-4"
          variant="outline"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
