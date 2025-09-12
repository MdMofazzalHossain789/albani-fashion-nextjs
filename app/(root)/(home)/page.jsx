import ProductSection from "@/components/product/ProductSection";
import Hero from "@/components/shared/Hero";
import MainSection from "@/components/shared/MainSection";
import Loading from "./loading";

// app/page.js
async function getData() {
  const res = await fetch(
    "https://api.believerssign.com.bd/api/v1/home/fetch-products",
    {
      cache: "force-cache", // "no-store", // or "force-cache"
    }
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return { data: null };
  }

  return res.json();
}

const page = async () => {
  const { data } = await getData();

  if (!data) {
    return <div>Something Went Wrong!</div>;
  }

  return (
    <div className="w-full h-full flex flex-col gap-y-2 pt-[67px]">
      <Hero data={data} />
      <MainSection className="mt-0">
        {data.categoryProducts.map((productSection, index) => (
          <ProductSection
            title={productSection.name}
            products={productSection.products}
            categorySlug={productSection.slug}
            key={index}
          />
        ))}
      </MainSection>
    </div>
  );
};

export default page;
