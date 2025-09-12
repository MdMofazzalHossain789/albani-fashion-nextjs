"use client";
import Button from "@/components/shared/Button";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

const Quantity = ({ isVariant, variations, nonVariation, setPrice }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    isVariant ? variations[0] : {}
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quantity >= selectedVariant.stock) {
      setQuantity(selectedVariant.stock);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(quantity));
  };

  const handleChange = (e) => {
    if (e.target.value <= 0) {
      setQuantity(1);
      return;
    }

    if (quantity <= selectedVariant.stock) {
      setQuantity(e.target.value);
    } else {
      setQuantity(selectedVariant.stock);
    }
  };

  console.log("Variations - ", selectedVariant.stock, quantity);

  return (
    <>
      <div className="flex items-center gap-x-4 text-lg my-2">
        <h1 className="font-semibold">Status:</h1>
        {selectedVariant.stock === 0 ? (
          <p className="font-medium text-red-600">Stock Out</p>
        ) : selectedVariant.stock < 10 ? (
          <p className="font-medium text-orange-600">Low Stock</p>
        ) : (
          <p className="font-medium text-green-600">In Stock</p>
        )}
      </div>
      {isVariant && (
        <div className="flex items-center gap-x-4 text-lg my-2">
          <h1 className="font-semibold">Available:</h1>

          {variations.map((variation, index) => {
            const isSelected = selectedVariant._id === variation._id;
            const isStockout = variation.stock === 0;

            return (
              <Button
                disabled={isStockout}
                variant={isSelected ? "primary" : "outline"}
                className={cn(
                  "px-3 rounded-sm py-2 text-sm",
                  isSelected && !isStockout && "cursor-not-allowed"
                )}
                key={variation._id}
                onClick={() => {
                  setSelectedVariant(variation);
                  setPrice({
                    sellingPrice: variation.sellingPrice,
                    regularPrice: variation.regularPrice,
                  });
                }}
              >
                {variation.attributeOpts[0].name}
              </Button>
            );
          })}
        </div>
      )}
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
            onClick={() => {
              if (quantity >= selectedVariant.stock) return;
              setQuantity(quantity + 1);
            }}
          >
            +
          </Button>
        </div>
      </div>
    </>
  );
};

export default Quantity;
