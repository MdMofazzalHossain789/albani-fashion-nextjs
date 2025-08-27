import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <form className="w-full max-w-[800px] flex items-center gap-x-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full outline-0 ring-0 border-2 px-4 py-2 rounded-md"
          />
        </form>
        <div>
          <div className="w-10 h-10 rounded-full bg-gray-500"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
