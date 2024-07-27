import { useAppDispatch } from "../../redux/hook";
import { deleteProductIntocart } from "../../redux/features/cart/cartSlice";
import { TCart } from "../../types/cart.type";
import CartTableBody from "../../pages/main/cart/CartTableBody";


const CartTable = ({ products }: { products: TCart[] }) => {
  const dispatch = useAppDispatch();
  const handleProductDeleteIntoCart = (productId:string) => {
    dispatch(deleteProductIntocart(productId));
  };

  return (
    <div className="my-9">
      <div className="overflow-x-auto">
        <table className="table  bg-white rounded-none">
          {/* head */}
          {products?.length == 0 && (
            <caption className="caption-bottom text-lg p-2">
              Data not found!
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
              <CartTableBody key={index} product={product} index={index} handleProductDeleteIntoCart={handleProductDeleteIntoCart}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
