import React from "react";
import CategoryPage from "./CategoryPage";

const getData = async (category) => {
  const res = await fetch(
    `
https://api.believerssign.com.bd/api/v1/product/admin-customer/productBy-category/${category}?page=1&limit=100`
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return { data: null };
  }

  return res.json();
};

const page = async ({ params }) => {
  const { category } = await params;
  const { data } = await getData(category);

  return <CategoryPage products={data || []} categorySlug={category} />;
};

export default page;
