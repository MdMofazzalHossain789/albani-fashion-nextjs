import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductCardList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} id={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardList;
