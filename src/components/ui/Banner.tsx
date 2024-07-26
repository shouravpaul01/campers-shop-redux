import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import banner1 from "../../assets/images/banner1.jpg";

const Banner = () => {
  return (
    <div className=" py-5 ">
      <div className="flex gap-3 ">
        <div className="w-full md:w-[60%] rounded-md">
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
            modules={[Autoplay, Pagination]}
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
        <div className="h-[388px] flex flex-col gap-3 w-[40%]">
          <div className="h-1/2">
            <img
              src={banner1}
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="h-1/2 ">
            <img
              src={banner1}
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
