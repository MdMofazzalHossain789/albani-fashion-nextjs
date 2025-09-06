import { cn } from "@/utils/cn";
import React from "react";

const MainSection = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-[1300px] w-full h-full mx-auto flex flex-col mt-[76.06px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MainSection;
