import { NextResponse } from "next/server";
import products from "@/data/homepage.json";
export const GET = async (req) => {
  return new NextResponse(JSON.stringify(products));
};
