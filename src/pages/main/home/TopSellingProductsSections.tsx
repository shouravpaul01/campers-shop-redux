import { TProduct } from "../../../types/product.type";
import ProductCard from "../../../components/card/ProductCard";
import Heading from "../../../components/ui/Heading";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import Loading from "../../../components/ui/Loading";

const TopSellingProductsSections = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({limit:4});
  return (
    <div className="py-9">
      <Heading headingTitle="Top Selling Products"/>
      {isLoading && <Loading className="h-[300px]"/>}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 py-6">
        {products?.data?.data.map((product: TProduct, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingProductsSections;
