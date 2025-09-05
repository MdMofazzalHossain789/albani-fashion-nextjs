"use client";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "../searchbar/SearchInput";
import MainSection from "../shared/MainSection";
import ShoppingCart from "./ShoppingCart";
import { SearchIcon } from "lucide-react";
import MobileSearchbar from "../searchbar/MobileSearchbar";
import Button from "../shared/Button";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-2 flex items-center gap-x-4 border-b-1 border-black/30">
      <MainSection className="w-full flex flex-row items-center justify-between px-2 md:px-10">
        <Link href={"/"}>
          <Image
            src={"/albani-fashion-logo.jpg"}
            height={60}
            width={120}
            alt="albani-fashion"
          />
        </Link>
        <div className="hidden md:block w-full max-w-[600px] mx-4 md:mx-10">
          <SearchInput />
        </div>
        <div className="flex items-center gap-x-4">
          <MobileSearchbar />

          <ShoppingCart />
          <Button className="p-1">
            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
          </Button>
        </div>
      </MainSection>
    </div>
  );
};

export default Navbar;
