import StarRatings from "react-star-ratings";
import { TProduct } from "../../types/product.type";
import { FaCartShopping, FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { addProductIntoCart } from "../../redux/features/cart/cartSlice";

const ProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: TProduct) => {
   
    const cartData={
      product:product,
      quantity:1,
      totalPrice:product.price
    }
    dispatch(addProductIntoCart(cartData));
  };
  return (
    <div className="card card-compact rounded-[4px] bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img
          src={product.image}
          alt="Shoes"
          className="w-full h-52 object-cover"
        />
      </figure>
      <div className="card-body ">
        <h2 className="text-base font-semibold text-gray-600">{product.name}</h2>
        <div className="card-actions items-center justify-between mt-auto">
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
        <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center rounded-[4px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
          <button
            className="btn btn-deepgreen rounded-full shadow-md shadow-white"
            onClick={() => handleAddToCart(product)}
          >
            <FaCartShopping />{" "}
          </button>
          <Link
            to={`/products/product-details/${product.slug}`}
            className="btn btn-deepgreen rounded-full shadow-md shadow-white"
          >
            <FaCircleInfo />
          </Link>
        </div>
         
      </div>
    </div>
  );
};

export default ProductCard;
