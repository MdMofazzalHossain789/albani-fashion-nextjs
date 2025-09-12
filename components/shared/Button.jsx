import { cn } from "@/utils/cn";
import Link from "next/link";

const getVariantClasses = (variantName) => {
  switch (variantName) {
    case "primary":
      return "bg-black text-white active:bg-black/50 hover:bg-black/90";
    case "secondary":
      return "text-black border-1 border-black/30";
    case "outline":
      return "text-black border-1 border-black/30 active:bg-black/20 active:border-black/20 hover:bg-black/5";

    default:
      return "active:bg-black/20 active:border-black/20 hover:bg-black/5";
  }
};

const Button = ({ variant, children, className, onClick, href, ...others }) => {
  const Component = href ? Link : "button";
  const classes = cn(
    "rounded-full p-2 sm:p-4 transition duration-200 cursor-pointer h-fit flex items-center justify-center gap-x-2 sm:gap-x-4 disabled:bg-gray-300 disabled:text-gray-500",
    getVariantClasses(variant),
    className
  );

  return (
    <Component href={href} className={classes} onClick={onClick} {...others}>
      {children}
    </Component>
  );
};

export default Button;
