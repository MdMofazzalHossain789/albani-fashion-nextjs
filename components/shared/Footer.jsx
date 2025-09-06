import React from "react";
import MainSection from "./MainSection";
import Link from "next/link";

const businessInformation = [
  {
    label: "Call Us",
    value: "+91-1234567890",
    link: "tel:+8801712345678",
  },
  {
    label: "Email Us",
    value: "mdmofazzalhossain789@gmail.com",
    link: "mailto:mdmofazzalhossain789@gmail.com",
  },
  {
    label: "Shop address",
    value: "Banti Bazar, Araihazar, Gawsia, Narayanganj, Dhaka, Bangladesh",
    link: "https://www.google.com/maps/place/23%C2%B048'47.9%22N+90%C2%B035'39.3%22E",
  },
];

const socialMedia = [
  {
    label: "Facebook",
    value: "https://www.facebook.com/mdmof.ahsan",
  },
  {
    label: "Instagram",
    value: "https://www.instagram.com/mdmof.ahsan",
  },
  {
    label: "Twitter",
    value: "https://twitter.com/mdmof.ahsan",
  },
];

const footerLinks = [
  {
    label: "Refund & returns",
    value: "/refund-and-returns",
  },
  {
    label: "About Us",
    value: "/about-us",
  },
  {
    label: "Terms & Conditions",
    value: "/terms-and-conditions",
  },
  {
    label: "Privacy Policy",
    value: "/privacy-policy",
  },
];

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <MainSection className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-10">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-lg font-semibold">Need help?</h1>
          <div>
            {businessInformation.map((item, index) => {
              const Component = item.link ? Link : "div";

              return (
                <Component
                  target="_blank"
                  href={item.link}
                  key={index}
                  className="flex items-center gap-x-4 text-sm"
                >
                  <h1 className="shrink-0">{item.label}:</h1>
                  <p className="font-semibold hover:underline active:underline">
                    {item.value}
                  </p>
                </Component>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold text-lg">Related Page</h1>

          <div>
            {footerLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.value}
                  className="flex items-center gap-x-4 text-sm font-semibold hover:underline active:underline"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default Footer;
