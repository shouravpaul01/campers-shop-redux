import { useParams } from "react-router-dom";
import { useGetSingleProductBySlugQuery } from "../../../redux/features/product/productApi";
import { useEffect, useRef, useState } from "react";
import PlusMinusInput from "../../../components/ui/PlusMinusInput";
import { useZoomImageMove } from "@zoom-image/react";
import { FaCartPlus, FaHeart } from "react-icons/fa6";
import Loading from "../../../components/ui/Loading";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { updateProductIntoCart } from "../../../redux/features/cart/cartSlice";
import { TProduct } from "../../../types/product.type";

const ProductDetails = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleProductBySlugQuery(slug);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { createZoomImage: createZoomImageMove } = useZoomImageMove();
  const product = data?.data;
  const {cart}= useAppSelector((state)=>state.cart)
  const isProductExistsIntoCart=cart?.find(cart=>cart.product.slug==slug)
  const [quantity, setQuantity] = useState(isProductExistsIntoCart?.quantity || 1);
  const dispatch=useAppDispatch()
  useEffect(() => {
    if (product) {
      createZoomImageMove(imageContainerRef.current as HTMLDivElement, {
        zoomImageSource: product?.image,
      });
    }
  }, [product]);
  const handleCart=(product:TProduct,newQuantity:number)=>{
    
    dispatch(updateProductIntoCart({product:product, quantity: newQuantity }));
  }
  if (isLoading) {
    return <Loading className="h-screen"/>;
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
        <div className="w-full md:w-3/5 bg-white rounded-[4px] p-10">
          <p className="font-medium text-sm uppercase opacity-70">
            {product?.category?.name}
            {">"}
            {product?.name}
          </p>
          <p className="font-semibold text-3xl py-5">{product?.name}</p>
          <p className="font-bold text-2xl ">৳ {product?.price} </p>
          <div className="py-4 flex flex-col md:flex-row gap-2">
            <PlusMinusInput
            btnClassName="btn-deepgreen rounded-[4px]"
              stockQunatity={product?.stockQunatity}
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <button className="btn btn-deepgreen rounded-[4px] uppercase" onClick={()=>handleCart(product,quantity)}>
              <FaCartPlus /> Add To cart
            </button>

            <button className="btn btn-outline btn-deepgreen rounded-[4px]  uppercase ">
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
