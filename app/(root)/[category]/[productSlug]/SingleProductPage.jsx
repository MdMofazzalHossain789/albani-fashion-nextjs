import MainSection from "@/components/shared/MainSection";
import SitePath from "@/components/shared/SitePath";
import React from "react";
import ProductDetails from "./ProductDetails";
import RelatedSection from "./RelatedSection";
import Loading from "./loading";

const getData = async (productSlug) => {
  const res = await fetch(
    `https://api.believerssign.com.bd/api/v1/product/admin-customer/view-with-similar/${productSlug}?similarLimit=10`
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return { data: null };
  }

  return res.json();
};

const SingleProductPage = async ({ category, productSlug }) => {
  const { data } = await getData(productSlug);

  if (!data || data === null) {
    <div>Not Found</div>;
  }

  return (
    <div className="w-full h-full bg-slate-100">
      <MainSection className="py-1 md:py-2">
        <SitePath
          paths={[
            { name: "Home", link: `/#${data._id}` },
            { name: category, link: category },
            { name: data?.name, link: data?.name },
          ]}
        />
      </MainSection>
      <div className="w-full bg-white">
        <MainSection className="mt-0">
          {data && <ProductDetails product={data} />}

          <RelatedSection
            products={data?.similarProducts || []}
            categorySlug={category}
          />
        </MainSection>
      </div>
    </div>
  );
};

export default SingleProductPage;
