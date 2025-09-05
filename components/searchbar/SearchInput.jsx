"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(searchText));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center">
      <input
        type="text"
        placeholder="Search a product..."
        onChange={(e) => setSearchText(e.target.value)}
        className="outline-none w-full border-1 px-4 py-2 rounded-l-md font-semibold selection:text-white selection:bg-black"
      />
      <button className="px-4 py-2 border-1 border-black rounded-r-md bg-black text-white cursor-pointer">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchInput;
