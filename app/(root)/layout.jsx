import Footer from "@/components/shared/Footer";
import Navbar from "@/components/navbar/Navbar";


const layout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
