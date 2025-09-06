import { Inter } from "next/font/google";

import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Albani Fashion | Online Shopping",
  description: "Low price online shopping at Albani Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-100`}>
        {children}
      </body>
    </html>
  );
}
