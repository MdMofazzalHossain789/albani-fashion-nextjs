"use client";

import { useState } from "react";
import Button from "../shared/Button";
import { SearchIcon } from "lucide-react";
import Backdrop from "../shared/Backdrop";
import SearchInput from "./SearchInput";

const MobileSearchbar = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  if (showSearchModal)
    return (
      <>
        <div className="absolute top-0 left-0 w-full h-[76px] bg-white z-50 flex items-center justify-center px-4 border-b-1 border-black/30">
          <SearchInput />
        </div>
        <Backdrop
          onClick={() => setShowSearchModal(false)}
          className="bg-transparent"
        />
      </>
    );

  return (
    <Button
      onClick={() => setShowSearchModal(true)}
      className="block md:hidden"
    >
      <SearchIcon />
    </Button>
  );
};

export default MobileSearchbar;
