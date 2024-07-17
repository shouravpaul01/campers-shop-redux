import { FaMinus, FaPlus } from "react-icons/fa6";

const PlusMinusInput = ({
  stockQunatity,
  quantity,
  setQuantity,
}: {
  stockQunatity:number;
  quantity: number;
  setQuantity: (updateFunction: (prevQuantity: number) => number) => void;
}) => {
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity==stockQunatity) {
      return
    }
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <div className="flex items-center space-x-2">
      <button className="btn btn-outline btn-primary" onClick={handleDecrement}>
        <FaMinus/>
      </button>
      <input
        type="text"
        className="input outline-none text-center  w-16"
        value={quantity}
        readOnly
      />
      <button className="btn btn-outline btn-primary" onClick={handleIncrement}>
        <FaPlus />
      </button>
    </div>
  );
};

export default PlusMinusInput;
