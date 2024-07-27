import {  useState } from "react";
import { TCart } from "../../../types/cart.type";
import PlusMinusInput from "../../../components/ui/PlusMinusInput";

const CartTableBody = ({
  product,
  index,
  handleProductDeleteIntoCart,
}: {
  product: TCart;
  index: number;
  handleProductDeleteIntoCart: (productId: string) => void;
}) => {
  const [quantity, setQuantity] = useState(product.quantity);
  console.log(quantity)
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={product.product.image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{product.product.name}</div>
            <div className="text-sm opacity-50">
              {product.product.category?.name}
            </div>
          </div>
        </div>
      </td>
      <td>{product.product.price} TK</td>
      <td>
        <PlusMinusInput
          btnClassName="btn-sm btn-deepgreen rounded-[4px]"
          inputClassName="input-sm"
          quantity={quantity}
          setQuantity={setQuantity}
          stockQunatity={product.product.stockQuantity}
          productId={product.product._id}
        />
      </td>
      <td>{product.product.price * quantity} TK</td>
      <td>
        <button
          onClick={() => handleProductDeleteIntoCart(product.product._id!)}
          className="btn btn-sm btn-circle btn-outline btn-error"
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default CartTableBody;
