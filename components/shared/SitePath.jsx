"use client";
import { cn } from "@/utils/cn";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SitePath = ({ paths = [] }) => {
  const pathname = usePathname();

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
        const isLast = paths.length - 1 === index;

        const Component = isLast ? "div" : Link;

        return (
          <div
            className="flex items-center gap-x-2 font-medium text-gray-600"
            key={index}
          >
            <Component
              href={isLast ? undefined : `/${item.toLowerCase()}`}
              className={cn(
                "transition duration-300 capitalize",
                isLast
                  ? "cursor-default"
                  : "hover:text-black hover:underline cursor-pointer"
              )}
            >
              {item}
            </Component>
            {!isLast && <p>/</p>}
          </div>
        );
      })}
    </div>
  );
};

export default SitePath;
