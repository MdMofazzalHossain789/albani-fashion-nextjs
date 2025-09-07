import { cn } from "@/utils/cn";
import React from "react";

const Input = ({ className, ...others }) => {
  return (
    <input
      {...others}
      className={cn(
        "outline-none w-full border-2 px-4 py-2 rounded-l-md font-semibold selection:text-white selection:bg-black",
        className
      )}
    />
  );
};

export default Input;
