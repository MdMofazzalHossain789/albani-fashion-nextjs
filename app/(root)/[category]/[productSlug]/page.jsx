import Loading from "./loading";
import SingleProductPage from "./SingleProductPage";

const page = async ({ params }) => {
  const { category, productSlug } = await params;
  return <SingleProductPage category={category} productSlug={productSlug} />;
};

export default page;
