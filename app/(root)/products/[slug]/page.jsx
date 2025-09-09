import React from "react";
import SingleProductPage from "../../[category]/[productSlug]/SingleProductPage";

const page = async ({ params }) => {
  const { slug } = await params;

  return <SingleProductPage slug={slug} />;
};

export default page;
