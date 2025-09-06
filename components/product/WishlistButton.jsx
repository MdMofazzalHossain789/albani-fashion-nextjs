"use client";
import React, { useState } from "react";
import Button from "../shared/Button";
import { Heart } from "lucide-react";

const WishlistButton = () => {
  const [wished, setWished] = useState(false);

  return (
    <Button
      variant="primary"
      className="bg-black/50"
      onClick={() => setWished((prev) => !prev)}
    >
      {wished ? (
        <Heart className="text-red-500" />
      ) : (
        <Heart className="text-white" />
      )}
    </Button>
  );
};

export default WishlistButton;
