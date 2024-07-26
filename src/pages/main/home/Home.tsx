import Banner from "../../../components/ui/Banner";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import DisplayCategorySection from "./DisplayCategorySection";
import FAQSection from "./FAQSection";
import NewArrivalSection from "./NewArrivalSection";
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
      <NewArrivalSection products={products?.data?.data}/>
      <FAQSection />
    </>
  );
};

export default Home;
