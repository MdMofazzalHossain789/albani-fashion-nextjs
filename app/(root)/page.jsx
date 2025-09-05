import Hero from "@/components/shared/Hero";
import MainSection from "@/components/shared/MainSection";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-2">
      <Hero />
      <MainSection>Home Page</MainSection>
    </div>
  );
};

export default page;
