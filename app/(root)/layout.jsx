import Navbar from "@/components/navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
