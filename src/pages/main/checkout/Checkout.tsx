import LeftSideCheckoutSection from "./LeftSideCheckoutSection";
import RightSideCheckoutSection from "./RightSideCheckoutSection";

const Checkout = () => {

  return (
    <div className="my-9 ">
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="w-full md:w-[60%] space-y-4">
          <LeftSideCheckoutSection />
        </div>
        <div className="w-full md:w-[40%] ">
          <RightSideCheckoutSection />
        </div>
      </div>
    </div>
    
  );
};

export default Checkout;
