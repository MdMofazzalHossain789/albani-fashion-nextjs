import ProductSection from "@/components/product/ProductSection";
import Hero from "@/components/shared/Hero";
import MainSection from "@/components/shared/MainSection";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-2">
      <Hero />
      <MainSection>
        <ProductSection title="Attar" />
        <ProductSection title="Clothing" />
        <ProductSection title="Shoe" />
      </MainSection>
    </div>
  );
};

export default page;
