import { cn } from "@/utils/cn";

const Button = ({ children, className, onClick, ...others }) => {
  return (
    <button
      className={cn(
        "p-4 rounded-full active:bg-black/20 active:border-black/20 hover:bg-black/5 transition duration-300 cursor-pointer",
        className
      )}
      onClick={onClick}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
