import React from "react";

const MainSection = ({ children }) => {
  return (
    <div className="w-full h-full bg-gray-500 max-w-[1300px] mx-auto">
      {children}
    </div>
  );
};

export default MainSection;
