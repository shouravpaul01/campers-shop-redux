import Banner from "../../../components/ui/Banner";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import DisplayCategorySection from "./DisplayCategorySection";
import ShippingInformationSection from "./ShippingInformationSection";
import TopSellingProductsSections from "./TopSellingProductsSections";

const Home = () => {
  const { data: products, isLoading } = useGetAllProductsQuery({});
  return (
    <>
      <Banner />
      <ShippingInformationSection />
      <TopSellingProductsSections products={products?.data?.data} />
      <DisplayCategorySection />
    </>
  );
};

export default Home;
