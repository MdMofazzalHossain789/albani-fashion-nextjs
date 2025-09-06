import React from "react";

const Title = ({ children }) => {
  return (
    <h1 className="text-center font-bold text-3xl my-10 capitalize">
      {children}
    </h1>
  );
};

export default Title;
