import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import banner1 from "../../assets/images/banner1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" py-5 ">
      <div className="flex gap-3 ">
        <div className="w-full md:w-[60%] rounded-md ">
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
              <div className="relative h-[400px]">
                <img
                  src={banner1}
                  alt="Camper"
                  className="h-full w-full object-cover rounded-[4px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-[4px]"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5">
                  <h2 className="text-2xl md:text-4xl font-bold">
                    Explore the Outdoors
                  </h2>
                  <p className="mt-2 text-sm md:text-lg text-white text-center text-opacity-50">
                    Discover our range of high-quality campers for your next
                    adventure. Whether you're looking for a compact campervan or
                    a spacious motorhome, we have the perfect option to suit
                    your needs. Enjoy unmatched comfort, cutting-edge features,
                    and durable construction designed to handle any terrain.
                  </p>
                  <Link to={"/products"} className="mt-4 btn btn-sm btn-deepgreen rounded-[4px]">
                    <FaArrowRightLong className="animate-bounceLR me-3" /> Shop
                    Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[400px]">
                <img
                  src={banner1}
                  alt="Camper Accessories"
                  className="h-full w-full object-cover rounded-[4px] "
                />
                <div className="absolute inset-0 bg-black opacity-20 rounded-[4px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-5">
                  <h2 className="text-2xl md:text-4xl font-bold">
                    Essential Accessories
                  </h2>
                  <p className="mt-2 text-sm md:text-lg text-white text-center text-opacity-50">
                    Find the best accessories to make your camping experience
                    perfect. From advanced navigation systems to cozy sleeping
                    bags, our selection ensures you have everything you need for
                    a memorable trip. Equip yourself with top-quality gear
                    designed for ultimate convenience and durability.
                  </p>
                  <Link to={"/products"} className="mt-4 btn btn-sm btn-deepgreen rounded-[4px]">
                    <FaArrowRightLong className="animate-bounceLR me-3" /> Shop
                    Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="h-[388px] flex flex-col gap-3 w-[40%]">
          {/* Product Discount Poster */}
          <div className="h-1/2 bg-gradient-to-r from-pink-500 to-pink-100 flex items-center justify-center rounded-[4px] relative">
            <img
              src={banner1}
              alt="Product Discount"
              className="h-full w-full object-cover rounded-[4px] opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h2 className="text-3xl font-bold">Huge Sale!</h2>
              <p className="text-xl mt-2">Up to 50% Off on All Campers</p>
              <Link to={"/products"}  className="btn btn-sm btn-deepgreen mt-4 rounded-[4px] ">
              <FaArrowRightLong className="animate-bounceLR me-3" /> Shop Now
              </Link>
            </div>
          </div>

          {/* Coupon Poster */}
          <div className="h-1/2 bg-gradient-to-r from-blue-100 to-purple-700  flex items-center justify-center rounded-[4px] relative">
            <img
              src={banner1}
              alt="Coupon"
              className="h-full w-full object-cover rounded-[4px] opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center  p-4">
              <h2 className="text-3xl font-bold text-white">Exclusive Coupon</h2>
              <p className="text-lg font-bold bg-white px-2 rounded-[4px] border border-violet-700 border-dashed animate-bounce mt-3">CAMP20</p>
              
            </div>
            <span className="absolute -top-4 right-4 bg-secondary py-2 px-4 mt-4 rounded-b-full text-sm font-semibold text-white">
                Get 
              <br/>
                20% 
                <br/>
                Off
              </span>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default Banner;
