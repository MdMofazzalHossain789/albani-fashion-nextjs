import { cn } from "@/utils/cn";
import React from "react";

const Label = ({ children, className, ...others }) => {
  return (
    <label
      {...others}
      className={cn("flex flex-col gap-y-2 text-black", className)}
    >
      {children}
    </label>
  );
};

export default Label;
