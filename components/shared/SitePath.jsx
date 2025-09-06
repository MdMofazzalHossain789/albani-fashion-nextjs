"use client";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SitePath = () => {
  const pathname = usePathname();

  const paths = pathname.split("/").filter((item) => item !== "");

  return (
    <div className="flex items-center gap-x-4 py-2 px-4">
      <div className="flex items-center gap-x-2 font-medium text-gray-600">
        <Link
          href={`/`}
          className="hover:text-black hover:underline transition duration-300 flex items-center gap-x-4"
        >
          <HomeIcon className="w-5 h-5" />
          Home
        </Link>
        {}
        <p>/</p>
      </div>
      {paths.map((item, index) => {
        return (
          <div
            className="flex items-center gap-x-2 font-medium text-gray-600"
            key={index}
          >
            <Link
              href={`/${item.toLowerCase()}`}
              className="hover:text-black hover:underline transition duration-300 capitalize"
            >
              {item}
            </Link>
            {paths.length - 1 !== index && <p>/</p>}
          </div>
        );
      })}
    </div>
  );
};

export default SitePath;
