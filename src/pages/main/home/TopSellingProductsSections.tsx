import { TProduct } from "../../../types/product.type";
import ProductCard from "../../../components/card/ProductCard";
import Heading from "../../../components/ui/Heading";

const TopSellingProductsSections = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="py-9">
      <Heading headingTitle="Top Selling Products"/>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-6">
        {products?.slice(0, 4)?.map((product: TProduct, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingProductsSections;
