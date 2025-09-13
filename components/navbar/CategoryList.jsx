"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const getData = async (category) => {
  const res = await fetch(
    `
https://api.believerssign.com.bd/api/v1/home/fetch-products?inWhere=web`
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return { data: null };
  }

  return res.json();
};

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setCategories(data.data.categoryData);
    };

    fetchData();
  }, []);

  console.log(categories);

  return (
    <div className="w-full items-center gap-x-4 font-semibold hidden md:flex">
      {categories.map((category, index) => {
        return (
          <Link
            href={`/${category.slug}`}
            className="capitalize py-2 px-4 hover:underline"
            key={index}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryList;
