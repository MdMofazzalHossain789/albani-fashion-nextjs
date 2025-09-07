import { cn } from "@/utils/cn";
import React from "react";

const Input = ({ className, ...others }) => {
  return (
    <input
      {...others}
      className={cn(
        "outline-none w-full bg-slate-200/5 focus:bg-white border-1 outline-1 ring-1 ring-transparent focus:ring-black px-4 py-2 rounded-md font-semibold selection:text-white selection:bg-black transition-all duration-300",
        className
      )}
    />
  );
};

export default Input;
