import { useParams } from "react-router-dom";
import { useGetSingleProductBySlugQuery } from "../../../redux/features/product/productApi";
import { useEffect, useRef, useState } from "react";
import PlusMinusInput from "../../../components/ui/PlusMinusInput";
import { useZoomImageMove } from "@zoom-image/react";
import { FaCartPlus, FaHeart } from "react-icons/fa6";
import Loading from "../../../components/ui/Loading";

const ProductDetails = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleProductBySlugQuery(slug);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { createZoomImage: createZoomImageMove } = useZoomImageMove();
  const product = data?.data;
  console.log(product);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (product) {
      createZoomImageMove(imageContainerRef.current as HTMLDivElement, {
        zoomImageSource: product?.image,
      });
    }
  }, [product]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row gap-10 ">
        <div className="w-full md:w-2/5 rounded-md">
          <div
            ref={imageContainerRef}
            className="relative  cursor-crosshair overflow-hidden rounded-md"
          >
            <img
              className="h-[400px] w-full rounded-md object-cover"
              alt="Large Pic"
              src={product?.image}
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 bg-slate-100 rounded-md p-10">
          <p className="font-medium text-sm uppercase opacity-70">
            {product?.category?.name}
            {">"}
            {product?.name}
          </p>
          <p className="font-semibold text-3xl py-5">{product?.name}</p>
          <p className="font-bold text-2xl ">৳ {product?.price} </p>
          <div className="py-4 flex flex-col md:flex-row gap-2">
            <PlusMinusInput
              stockQunatity={product?.stockQunatity}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <button className="btn btn-accent font-semibold uppercase">
              <FaCartPlus /> Add To cart
            </button>

            <button className="btn btn-outline btn-accent font-semibold uppercase ">
              <FaHeart /> Add To wishlist
            </button>
          </div>
          <p className="font-semibold opacity-70">
            <span>Categories:</span>
            {product?.category?.name}
          </p>
        </div>
      </div>
      <div className="py-8">
        <p className="font-bold text-2xl border-b border-slate-100 pb-3">Description</p>
        <p className="pt-2">{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
