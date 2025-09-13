"use client";
import { cn } from "@/utils/cn";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SitePath = ({ paths = [] }) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-4 py-2 px-4">
      {paths.map((item, index) => {
        const isLast = paths.length - 1 === index;

        const Component = !item.link ? "div" : Link;

        if (index === 0) {
          return (
            <div
              className="flex items-center gap-x-2 font-medium text-gray-600"
              key={index}
            >
              <Link
                href={item.link}
                className="hover:text-black hover:underline transition duration-300 flex items-center gap-x-4"
                key={index}
              >
                <HomeIcon className="w-5 h-5" />
                Home
              </Link>
              <p>/</p>
            </div>
          );
        }

        return (
          <div
            className="flex items-center gap-x-2 font-medium text-gray-600"
            key={index}
          >
            <Component
              href={!item.link ? undefined : `/${item.link.toLowerCase()}`}
              className={cn(
                "transition duration-300 capitalize",
                !item.link
                  ? "cursor-default"
                  : "hover:text-black hover:underline cursor-pointer"
              )}
            >
              {item.name}
            </Component>
            {!isLast && <p>/</p>}
          </div>
        );
      })}
    </div>
  );
};

export default SitePath;
