import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../assets/images/banner1.jpg";

const Banner = () => {
  return (
    <div className="h-[400px] py-14">
      <div className="flex gap-5 ">
        <div className="w-full  md:w-3/5 rounded-md">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="">
                <img
                  src={banner1}
                  alt=""
                  className="h-[400px] object-cover rounded-md"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="h-[400px] flex flex-col">
          <div className="h-1/2">
            <img src={banner1} alt="" className=" rounded-md" />
          </div>
          <div className="h-1/2">
            <img src={banner1} alt="" className=" rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
