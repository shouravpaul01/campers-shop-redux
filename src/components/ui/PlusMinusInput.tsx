import { FaMinus, FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hook";
import { updateProductIntoCart } from "../../redux/features/cart/cartSlice";

const PlusMinusInput = ({
  btnClassName,
  inputClassName,
  stockQunatity,
  quantity,
  setQuantity,
  productId,
}: {
  btnClassName?:string;
  inputClassName?:string;
  stockQunatity:number;
  quantity: number;
  setQuantity: (quantity:number) => void;
  productId?:string
}) => {
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    if (stockQunatity==quantity) {
      toast.error("Stock is not available.")
      return
    }
    if (productId) {
      dispatch(updateProductIntoCart({ productId, quantity: newQuantity }));
    }
    setQuantity(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    if (quantity == 1) {
      return
    }
    if (productId) {
      dispatch(updateProductIntoCart({ productId, quantity: newQuantity }));
    }
    setQuantity(newQuantity);
  };
  return (
    <div className="flex items-center space-x-2">
      <button className={`btn ${btnClassName}`} onClick={handleDecrement}>
        <FaMinus/>
      </button>
      <input
        type="text"
        className={`input input-bordered focus-within:outline-none  text-center  w-16 ${inputClassName}`}
        value={quantity}
        readOnly
      />
      <button className={`btn ${btnClassName}`} onClick={handleIncrement}>
        <FaPlus />
      </button>
    </div>
  );
};

export default PlusMinusInput;
