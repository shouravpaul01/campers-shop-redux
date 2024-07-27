import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PosterSection = () => {
  return (
    <div className="py-9">
      <div className="md:h-[300px] bg-gradient-to-r from-pink-100 to-pink-400 rounded-[4px]   p-5 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dcrui4h7s/image/upload/v1722100560/campers-shop/uploads/hwykwchyrnvbu2qawlrr.png"
            alt="Camping Table"
            className="w-full h-[260px] object-cover rounded"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left   md:pl-5">
          <h2 className="text-2xl font-bold mb-2 ">Premium Camping Tent</h2>
          <p className="text-lg opacity-70 mb-4">
            Experience the outdoors with our durable and lightweight camping
            Tent. Perfect for any adventure!
          </p>
          <Link to={"/products"} className="btn btn-deepgreen animate-bounceLR hover:animate-none">
            Shop Now <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PosterSection;
