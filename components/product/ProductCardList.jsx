import ProductCard from "./ProductCard";

const ProductCardList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};

export default ProductCardList;
