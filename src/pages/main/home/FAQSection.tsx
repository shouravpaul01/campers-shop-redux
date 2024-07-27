import Lottie from "react-lottie";
import faqLottie from "../../../assets/lottie/faq-lottie.json";
const FAQSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: faqLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="my-8">
      <div>
        <p className="text-3xl font-bold text-center">Some Answers For You</p>
        <p className="text-lg text-center text-gray-600 mt-2">
          Your satisfaction is our priority. Find answers to your questions
          below.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 py-6">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white rounded-[4px]">
          <Lottie options={defaultOptions} width={350} height={350} />
        </div>
        <div className="w-full md:w-1/2 space-y-2">
          <div className="collapse rounded-[4px] collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-lg font-medium border-b border-dashed">
              Q: What types of campers do you offer?
            </div>
            <div className="collapse-content">
              <p>
                We offer a wide variety of campers, including travel trailers,
                pop-up campers, fifth wheels, and motorhomes. Each type has its
                own unique features to suit different camping needs.
              </p>
            </div>
          </div>
          <div className="collapse rounded-[4px] collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg font-medium border-b border-dashed">
            Q: Do your campers come with a warranty?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                Yes, all of our new campers come with a manufacturer's warranty.
                We also offer extended warranty options for additional peace of
                mind.
              </p>
            </div>
          </div>
          <div className="collapse rounded-[4px] collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg font-medium border-b border-dashed">
            Q: How long does shipping take?
            </div>
            <div className="collapse-content">
              <p>
                hipping times vary based on your location and the type of camper
                purchased. Typically, it takes between 2-4 weeks for delivery.
                Our team will provide you with a more accurate estimate once
                your order is processed.
              </p>
            </div>
          </div>
          <div className="collapse rounded-[4px] collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg font-medium border-b border-dashed">
            Q: What is your return policy?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                We accept returns within 30 days of purchase, provided the
                camper is in its original condition. A restocking fee may apply.
                Please contact our customer service team to initiate a return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
