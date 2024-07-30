import { BiSolidCategory } from "react-icons/bi";
import { FaCubesStacked } from "react-icons/fa6";
import { useGetAllCategoriesQuery } from "../../../redux/features/category/categoryApi";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import Loading from "../../../components/ui/Loading";

const Dashboard = () => {
    const {data:categories,isLoading:isCategoryLoading}=useGetAllCategoriesQuery(undefined)
    const {data:products,isLoading:isProductLoading}=useGetAllProductsQuery({})
    if (isCategoryLoading || isProductLoading) {
        return <Loading className="h-screen"/>
    }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="flex items-center justify-between bg-pink-300 rounded-lg font-bold  p-3">
        <div>
          <BiSolidCategory className="text-2xl" />
          <p className="text-xl">Category</p>
        </div>

        <p className="text-xl pe-3">{categories?.data?.data?.length}</p>
      </div>
      <div className="flex items-center justify-between bg-violet-300 rounded-lg font-bold  p-3">
        <div>
        <FaCubesStacked className="text-2xl" />
          <p className="text-xl">Product</p>
        </div>

        <p className="text-xl pe-3">{products?.data?.data?.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;
