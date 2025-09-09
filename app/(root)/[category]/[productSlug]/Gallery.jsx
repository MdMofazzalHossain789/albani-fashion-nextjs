"use client";
import { cn } from "@/utils/cn";
import { Eye } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ galleryImage }) => {
  const [selected, setSelected] = useState(galleryImage[0]);

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="relative w-full h-[55vh] md:h-[70vh]">
        <Image
          src={`https://api.believerssign.com.bd/${selected}`}
          fill
          alt={"name"}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex items-center gap-x-4">
        {galleryImage.map((item, index) => {
          const isSelected = selected === item;

          return (
            <div
              key={index}
              className={cn(
                "relative w-14 h-14 rounded-sm overflow-hidden border-2 border-transparent transition duration-300 bg-transparent",
                isSelected ? "border-black bg-black" : "cursor-pointer"
              )}
              onClick={() => setSelected(item)}
            >
              {/* {isSelected && (
                <Eye className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white" />
              )} */}
              <Image
                src={`https://api.believerssign.com.bd/${item}`}
                fill
                alt={"name"}
                sizes="(max-width: 768px) 100vw, 1200px"
                className={cn(
                  "object-cover transition duration-300",
                  isSelected && "opacity-70"
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
