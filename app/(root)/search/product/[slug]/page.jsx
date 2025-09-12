const page = async ({ params }) => {
  const { slug } = await params;

  return <div>Single Product Page : {slug}</div>;
};

export default page;
