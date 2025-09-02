import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import MainSection from "@/components/MainSection";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-2">
      <Hero />
      <MainSection>
        <div className="w-full bg-white px-4 py-2 rounded-md">
          <div className="flex items-center gap-x-4">
            <h1 className="font-semibold uppercase text-2xl p-4 w-fit flex shrink-0">
              Attar
            </h1>
            <Divider />
            <Link
              href={"#"}
              className="font-semibold text-white bg-black flex shrink-0 px-4 py-2 rounded-full"
            >
              Show All
            </Link>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default page;
