"use client";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "../searchbar/SearchInput";
import MainSection from "../shared/MainSection";
import ShoppingCart from "./ShoppingCart";
import MobileSearchbar from "../searchbar/MobileSearchbar";
import Button from "../shared/Button";
import { User } from "lucide-react";
import CategoryList from "./CategoryList";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="w-full px-4 py-2 flex items-center gap-x-4 border-b-1 border-black/30">
        <MainSection className="w-full px-2 md:px-10 mt-0 flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <Link href={"/"} className="">
              <Image
                src={"/albani-fashion-logo.jpg"}
                width={100}
                height={50}
                alt="albani-fashion object-contain"
              />
            </Link>
            <div className="hidden md:block w-full max-w-[600px] mx-4 md:mx-10">
              <SearchInput />
            </div>
            <div className="flex items-center gap-x-4">
              <MobileSearchbar />

              <ShoppingCart />
              <Button className="p-2">
                <div className="w-6 h-6 rounded-full text-black border-2 flex items-center justify-center">
                  <User />
                </div>
              </Button>
            </div>
          </div>

          <CategoryList />
        </MainSection>
      </div>
    </nav>
  );
};

export default Navbar;
