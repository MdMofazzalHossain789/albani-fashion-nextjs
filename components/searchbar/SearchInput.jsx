"use client";

import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Input from "../form/Input";
import Image from "next/image";
import { useRouter } from "next/navigation";
//https://api.believerssign.com.bd/api/v1/product/admin-customer/search?page=1&limit=10
const getData = async (searchText) => {
  const res = await fetch(
    `https://api.believerssign.com.bd/api/v1/product/admin-customer/search?page=1&limit=10`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: searchText,
      }),
    }
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return { data: null };
  }

  return res.json();
};

const SearchInput = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [data]);

  console.log(data);

  const handleSearch = async () => {
    const { data } = await getData(searchText);
    setData(data);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    handleSearch();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchText) {
      setIsOpen(false);
      return;
    }
    // handleSearch();
    // alert(JSON.stringify(searchText));
    router.push(`/search?q=${searchText}`);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} className="w-full flex items-center">
        <Input
          autoFocus
          type="text"
          placeholder="Search a product..."
          onChange={handleChange}
        />
        <button className="px-4 py-2 border-2 border-black rounded-r-md bg-black text-white cursor-pointer">
          <SearchIcon />
        </button>
      </form>
      {isOpen && (
        <>
          <div className="absolute top-[100%] left-0 w-full z-50 bg-white max-h-[40vh] overflow-y-auto border-1 rounded-md mt-2 flex flex-col gap-y-2">
            {data.map((product, item) => {
              const sellingPrice = product.isVariant
                ? product.variations[0].sellingPrice
                : product.nonVariation.sellingPrice;
              const regularPrice = product.isVariant
                ? product.variations[0].regularPrice
                : product.nonVariation.regularPrice;
              return (
                <div
                  className="flex items-center gap-x-4 px-4 py-2 cursor-pointer hover:bg-black/10"
                  key={product._id}
                  onClick={() => {
                    router.push(`/products/${product.slug}`);
                    setIsOpen(false);
                  }}
                >
                  <div>
                    <Image
                      className="object-cover rounded-md bg-gray-500 w-auto"
                      src={`https://api.believerssign.com.bd/${product.galleryImage[0]}`}
                      width={60}
                      height={60}
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <h1 className="font-medium line-clamp-1">{product.name}</h1>

                    <div className="flex items-center gap-x-2">
                      <p className="line-through">{regularPrice}৳</p>
                      <p className="font-bold">{sellingPrice}৳</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 w-screen h-screen z-40"
          ></div>
        </>
      )}
    </div>
  );
};

export default SearchInput;
