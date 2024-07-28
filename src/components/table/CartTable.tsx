import { useAppDispatch } from "../../redux/hook";
import { deleteProductIntocart } from "../../redux/features/cart/cartSlice";
import { TCart } from "../../types/cart.type";
import CartTableBody from "../../pages/main/cart/CartTableBody";
import { FaArrowRightLong, FaRegFaceFrownOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartTable = ({ products }: { products: TCart[] }) => {
  const dispatch = useAppDispatch();
  const handleProductDeleteIntoCart = (productId: string) => {
    dispatch(deleteProductIntocart(productId));
  };

  return (
    <div className="my-9">
      <div className="overflow-x-auto">
        <table className="table  bg-white rounded-none">
          {/* head */}
          {products?.length == 0 && (
            <caption className="caption-bottom text-lg  p-2">
             <div className="flex items-center justify-center gap-2 ">
             <FaRegFaceFrownOpen className="text-deepgreen" /> Products no found.Please <Link className="underline text-blue-800" to={"/products"}>Shopping</Link>
             </div>
            </caption>
          )}
          <thead className="bg-[#92C6C5] text-sm text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total Price</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: TCart, index: number) => (
              <CartTableBody
                key={index}
                product={product}
                index={index}
                handleProductDeleteIntoCart={handleProductDeleteIntoCart}
              />
            ))}
          </tbody>
        </table>
      </div>
      {products?.length > 0 && (
        <div className="flex justify-end my-5">
          <Link to={"/checkout"} className="btn btn-sm btn-deepgreen rounded-[4px]">
            <FaArrowRightLong className="animate-bounceLR me-3" /> Proceed To Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartTable;
