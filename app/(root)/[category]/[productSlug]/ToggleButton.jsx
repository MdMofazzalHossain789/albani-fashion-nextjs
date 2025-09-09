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

const ToggleButton = ({ variations }) => {
  const [size, setSize] = useState("sm");

  return (
    <div className="flex items-center gap-x-4 text-lg my-2">
      <h1 className="font-semibold">Available:</h1>

      {variations.map((variation, index) => (
        <Button
          variant={size === variation._id ? "primary" : "outline"}
          className="px-3 rounded-sm py-2 text-sm"
          key={variation._id}
          onClick={() => setSize(variation._id)}
        >
          {variation.attributeOpts[0].name}
        </Button>
      ))}
    </div>
  );
};

export default ToggleButton;
