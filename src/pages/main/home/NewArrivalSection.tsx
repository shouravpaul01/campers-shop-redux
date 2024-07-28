import ProductCard from "../../../components/card/ProductCard";
import Heading from "../../../components/ui/Heading"
import { TProduct } from "../../../types/product.type"

const NewArrivalSection = ({products}:{products:TProduct[]}) => {
    const newArrivals=products?.sort((a, b) => new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime()) || [];
  return (
    <div className="py-9">
      <Heading headingTitle="New Arrivals"/> 
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-6">
      {newArrivals?.slice(0, 6)?.map((product: TProduct, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default NewArrivalSection
