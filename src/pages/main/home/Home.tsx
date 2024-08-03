import Banner from "../../../components/ui/Banner";
import useTitle from "../../../hook/useTitle";
import DisplayCategorySection from "./DisplayCategorySection";
import FAQSection from "./FAQSection";
import NewArrivalSection from "./NewArrivalSection";
import PosterSection from "./PosterSection";
import ShippingInformationSection from "./ShippingInformationSection";
import TopSellingProductsSections from "./TopSellingProductsSections";

const Home = () => {
  useTitle()

  return (
    <>
      <Banner />
      <ShippingInformationSection />
      <TopSellingProductsSections  />
      <DisplayCategorySection />
      <NewArrivalSection />
      <PosterSection />
      <FAQSection />
    </>
  );
};

export default Home;
