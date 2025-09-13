import MainSection from "@/components/shared/MainSection";
import ProductSectionSkeleton from "@/components/shared/skeleton/ProductSectionSkeleton";

const Loading = () => {
  return (
    <div className="w-full h-full">
      <MainSection>
        <h1 className="title px-4 mt-4 md:mt-10 -mb-4 text-gray-500 animate-pulse">
          Products By Category
        </h1>
        <ProductSectionSkeleton noTitle />
      </MainSection>
    </div>
  );
};

export default Loading;
