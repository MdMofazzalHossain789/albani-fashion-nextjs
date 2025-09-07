"use client";
import Button from "@/components/shared/Button";
import { useState } from "react";

const availableSizes = [
  {
    label: "S",
    value: "sm",
  },
  {
    label: "M",
    value: "md",
  },
  {
    label: "L",
    value: "lg",
  },
  {
    label: "XL",
    value: "xl",
  },
  {
    label: "XXL",
    value: "xxl",
  },
];

const ToggleButton = () => {
  const [size, setSize] = useState("sm");

  return (
    <div className="flex items-center gap-x-4 text-lg my-2">
      <h1 className="font-semibold">Available Sizes:</h1>

      {availableSizes.map((item, index) => (
        <Button
          variant={size === item.value ? "primary" : "outline"}
          className="px-3 rounded-sm py-2 text-sm"
          key={index}
          onClick={() => setSize(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default ToggleButton;
