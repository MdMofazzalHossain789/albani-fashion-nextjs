import ProductCardList from "@/components/product/ProductCardList";
import MainSection from "@/components/shared/MainSection";

const SearchPage = ({ products, searchParams }) => {
  return (
    <div className="w-full h-full pt-[76px] md:pt-[110px]">
      <MainSection className={"!mt-0"}>
        <h1 className="title py-4 !capitalize">
          Searched Products Found for "
          <span className="font-bold">{searchParams}</span>":
        </h1>

        <ProductCardList products={products} />
      </MainSection>
    </div>
  );
};

export default SearchPage;
