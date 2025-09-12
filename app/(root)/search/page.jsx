import SearchPage from "./SearchPage";

const getProductsByQuery = async (q) => {
  const res = await fetch(
    `https://api.believerssign.com.bd/api/v1/product/admin-customer/search?page=1&limit=10`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: q,
      }),
    }
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return { data: null };
  }

  return res.json();
};

const page = async ({ searchParams }) => {
  const { q } = await searchParams;

  const { data } = await getProductsByQuery(q);

  console.log(data);

  return <SearchPage products={data || []} searchParams={q} />;
};

export default page;
