import { useState } from "react";
import { bangladeshDistricts } from "../../../constant";
import { FaArrowRightLong } from "react-icons/fa6";

const LeftSideCheckoutSection = () => {
  const [isHideCouponDiv, setIsHideCouponDiv] = useState<boolean>(false);
  
  return (
    <>
      <div className="bg-white rounded-[4px] p-5 ">
        <p>
          Have a coupon?
          <button
            className="btn-link"
            onClick={() => setIsHideCouponDiv(!isHideCouponDiv)}
          >
            Click here to enter your code
          </button>
        </p>
        {isHideCouponDiv && (
          <div className="flex gap-3 mt-3">
            <input
              type="text"
              placeholder="Coupon Code"
              className="input input-bordered rounded-[4px] w-full"
            />
            <button className="btn btn-deepgreen rounded-[4px]"><FaArrowRightLong className="animate-bounceLR me-2" /> Apply</button>
          </div>
        )}
      </div>
      <div className="bg-white rounded-[4px] p-5">
        <h2 className="text-2xl font-bold mb-3">Billing Details</h2>
        <form className="space-y-2">
          <div className="flex gap-2">
            <div className="form-control w-1/2">
              <label className="label p-[2px]">
                <span className="label-text text-base">
                  First Name <span className="text-red-400">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered rounded-[4px]"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label p-[2px]">
                <span className="label-text text-base">
                  Last Name <span className="text-red-400">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered rounded-[4px]"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label p-[2px]">
              <span className="label-text text-base">
                Email Address <span className="text-red-400">*</span>
              </span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered rounded-[4px]"
            />
          </div>
          <div className="form-control">
            <label className="label p-[2px]">
              <span className="label-text text-base">
                Phone Number <span className="text-red-400">*</span>
              </span>
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered rounded-[4px]"
            />
          </div>
          <div className="form-control">
            <label className="label p-[2px]">
              <span className="label-text text-base">
                Street address <span className="text-red-400">*</span>
              </span>
            </label>
            <input
              type="tel"
              placeholder="Street address"
              className="input input-bordered rounded-[4px]"
            />
          </div>
          <div className="form-control">
            <label className="label p-[2px]">
              <span className="label-text text-base">
                Town / City <span className="text-red-400">*</span>
              </span>
            </label>
            <input
              type="tel"
              placeholder="Town / City"
              className="input input-bordered rounded-[4px]"
            />
          </div>
          <div className="flex gap-2">
            <div className="form-control w-1/2">
              <label className="label p-[2px]">
                <span className="label-text text-base">
                  Distict <span className="text-red-400">*</span>
                </span>
              </label>
              <select className="select select-bordered rounded-[4px]">
                <option value={""}>Select District</option>
                {bangladeshDistricts.map((district, index) => (
                  <option key={index} value={district.value}>
                    {district.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-1/2">
              <label className="label p-[2px]">
                <span className="label-text text-base">
                  Postcode/ZIP <span className="text-red-400">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Postcode"
                className="input input-bordered rounded-[4px]"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LeftSideCheckoutSection;
