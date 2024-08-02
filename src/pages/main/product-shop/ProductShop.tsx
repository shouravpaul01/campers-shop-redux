import { IoFilter } from "react-icons/io5";
import "rc-slider/assets/index.css";
import { useState } from "react";
import ProductShopSideBar from "../../../components/sidebar/ProductShopSideBar";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import { TProduct } from "../../../types/product.type";
import ProductCard from "../../../components/card/ProductCard";
import Pagination from "../../../components/ui/Pagination";
import Loading from "../../../components/ui/Loading";
import { useLocation } from "react-router-dom";

const ProductShop = () => {
  const [sortValue, setSortValue] = useState("");
  const [priceRangeValue, setPriceRangeValue] = useState([100,10000]);
  const [categoryValue, setCategoryValue] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const location = useLocation();
  console.log(priceRangeValue);
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";
  const { data: products, isLoading } = useGetAllProductsQuery({
    searchTerm: searchQuery,
    categories: categoryValue,
    priceRange:{minPrice:priceRangeValue[0],maxPrice:priceRangeValue[1]},
    page: currentPage,
    sort: sortValue,
  });
  // if (isLoading) {
  //   return <Loading className="h-screen" />;
  // }
 
  return (
    <>
      <div className="flex gap-8 my-7 mx-3 md:mx-0">
        <div className="hidden md:block w-1/4 space-y-5">
          <ProductShopSideBar
            rangeValue={priceRangeValue}
            setRangeValue={setPriceRangeValue}
            setCategoryValue={setCategoryValue}
          />
        </div>
        <div className="w-full md:w-3/4">
          <div className="flex bg-white p-3 rounded-[4px]">
            <div className="flex-1">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-sm md:hidden"
              >
                <IoFilter /> Filter
              </label>
              <p className="font-bold text-lg ps-2 hidden md:block">All</p>
            </div>
            <div className="flex items-center gap-1 w-52">
              <p className="w-24">Sort by:</p>
              <select
                className="select select-bordered  select-sm rounded-[4px] w-full "
                onChange={(e) => setSortValue(e.target.value)}
              >
                <option value="-createdAt">Deafult</option>
                <option value="price">Low to High</option>
                <option value="-price">High to Low</option>
              </select>
            </div>
          </div>
          {isLoading && <Loading className="h-screen" />}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-7">
            {products?.data?.data?.map((product: TProduct, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className="px-2 my-14">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={products?.data?.totalPages}
            />
          </div>
        </div>
      </div>
      {/*Mobile side bar */}
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="bg-white  min-h-full w-80 space-y-1">
            <ProductShopSideBar
              rangeValue={priceRangeValue}
              setRangeValue={setPriceRangeValue}
              setCategoryValue={setCategoryValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShop;
