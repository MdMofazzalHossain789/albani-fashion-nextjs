import { cn } from "@/utils/cn";

const Backdrop = ({ className, ...others }) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-screen h-screen z-40 bg-black/50",
        className
      )}
      {...others}
    ></div>
  );
};

export default Backdrop;
