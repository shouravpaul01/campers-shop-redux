import ProductCard from "../../../components/card/ProductCard";
import Heading from "../../../components/ui/Heading"
import Loading from "../../../components/ui/Loading";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import { TProduct } from "../../../types/product.type"

const NewArrivalSection = () => {
  const { data: newArrivals, isLoading } = useGetAllProductsQuery({sort:"-createdAt",limit:6});
  return (
    <div className="py-9">
      <Heading headingTitle="New Arrivals"/> 
      {isLoading && <Loading className="h-[300px]"/>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 py-6">
      {newArrivals?.data?.data?.map((product: TProduct, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default NewArrivalSection
