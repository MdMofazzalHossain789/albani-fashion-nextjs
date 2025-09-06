import Footer from "@/components/shared/Footer";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
