import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import { ShoppingCart } from "lucide-react";
import Badge from "./Badge";

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-4 py-2">
      <div className="max-w-[1200px] mx-auto flex items-center gap-x-10 justify-between">
        <Link href="/">
          <Image
            src="/albani-fashion-logo.jpg"
            width={120}
            height={50}
            alt="Albani Fashion Logo"
          />
        </Link>
        <Searchbar />
        <div className="flex items-center gap-x-4 md:gap-x-10">
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
          <div className="relative">
            <div className="absolute -top-4 -right-4">
              <Badge />
            </div>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
