"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import Input from "../form/Input";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(searchText));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center">
      <Input
        autoFocus
        type="text"
        placeholder="Search a product..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="px-4 py-2 border-2 border-black rounded-r-md bg-black text-white cursor-pointer">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchInput;
