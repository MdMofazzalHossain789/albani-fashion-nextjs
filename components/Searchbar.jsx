"use client";
import { Search } from "lucide-react";
import { useState } from "react";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchText);
  };

  return (
    <form
      className="w-full max-w-[700px] flex items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for products..."
        className="w-full outline-0 ring-0 border-2 px-4 py-2 rounded-l-md font-medium selection:bg-black selection:text-white"
      />
      <button className="bg-black text-white rounded-r-md px-4 py-2 border-2 border-black">
        <Search />
      </button>
    </form>
  );
};

export default Searchbar;
