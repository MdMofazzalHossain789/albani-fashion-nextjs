import React from "react";
import SingleProductPage from "./SingleProductPage";

const page = async ({ params }) => {
  const { slug } = await params;

  return <SingleProductPage slug={slug} />;
};

export default page;
