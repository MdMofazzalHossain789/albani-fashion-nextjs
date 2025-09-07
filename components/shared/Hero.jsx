import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] bg-gray-500 relative">
      <img
        src={"/image.png"}
        // fill={true}
        alt="hero image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
