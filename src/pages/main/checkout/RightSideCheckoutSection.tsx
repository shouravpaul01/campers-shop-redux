import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { TCart } from "../../../types/cart.type";

const RightSideCheckoutSection = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const total = cart?.reduce((sum, product) => sum + product.totalPrice, 0);
  return (
    <>
      <p className="text-base font-semibold uppercase">Your Orders</p>
      <div className="mt-3 mb-5">
        <div className="overflow-x-auto">
          <table className="table  bg-white rounded-none">
            <thead className="bg-[rgb(146,198,197)] text-sm text-black">
              <tr>
                <th>Product</th>
                <th>SubTotal</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((element: TCart, index: number) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={element.product.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{element.product.name}</div>
                        <div className="text-sm opacity-50">
                          X {element.quantity}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{element.totalPrice} TK</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="text-base">
              <tr>
                <th className="text-end">Total:</th>
                <th>{total} TK</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-[4px] p-5 ">
        <div className="pb-5 border-b border-dashed">
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-deepgreen"
                defaultChecked
              />
              <span className="label-text text-base font-semibold">
                Cash on delivery
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-deepgreen"
              />
              <span className="label-text text-base font-semibold">Stripe</span>
            </label>
          </div>
        </div>
        <div>
          <p className="py-3">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <Link to={""} className="btn-link">
              privacy policy
            </Link>
            .
          </p>
          <button className="btn btn-sm btn-deepgreen rounded-[4px] w-full">
            <FaLock /> Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default RightSideCheckoutSection;
