import StarRatings from "react-star-ratings";
import { TProduct } from "../../types/product.type";
import { FaCartShopping, FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="card card-compact rounded-md bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img
          src={product.image}
          alt="Shoes"
          className="w-full h-52 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <div className="card-actions items-center justify-between">
        <p className="font-bold text-lg">{product.price} Tk</p>
          <StarRatings
            rating={product.rating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="14px"
            starSpacing="2px"
          />
        </div>
        <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center rounded-md bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
          <button className="btn btn-sm btn-success "><FaCartShopping /> Add to Cart</button>
          <Link to={`/products/product-details/${product.slug}`} className="btn btn-sm btn-success "><FaCircleInfo /> See Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;