import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
