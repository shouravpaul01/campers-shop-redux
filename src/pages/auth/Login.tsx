import { useState } from "react";
import { FaArrowRightToBracket, FaEye, FaEyeSlash } from "react-icons/fa6";
import Lottie from "react-lottie";
import login_lottie from "../../assets/lottie/login-lottie.json";
import useTitle from "../../hook/useTitle";

const Login = () => {
  useTitle("Login")
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const lottieAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: login_lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white flex  gap-10  flex-col-reverse md:flex-row h-auto md:h-[450px] rounded-[4px] p-10">
        {/* Left side: Login form */}
        <div className="flex-1 flex items-center justify-center ">
          <div className="w-full max-w-md   rounded-[4px]">
            <div className="border-b border-deepgreen border-dashed pb-2">
              <h1 className="text-2xl font-bold ">Login</h1>
              <p className=" text-gray-500">
                Welcome back! Please enter your details to log in.
              </p>
            </div>
            <form className="space-y-4">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">
                    Email <span className="text-red-400">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered rounded-[4px] w-full"
                />
              </div>
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <label className="input input-bordered rounded-[4px] flex items-center gap-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="grow"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </label>
              </div>
              <div className="form-control ">
                <button className="btn btn-deepgreen w-full"><FaArrowRightToBracket />Login</button>
              </div>
              <div className="text-center">
                <a href="#" className="link link-primary">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="border border-dashed border-deepgreen"></div>
        {/* Right side: Lottie animation */}
        <div className="flex-1 flex items-center justify-center  ">
          <div className="w-full max-w-md  ">
            <Lottie options={lottieAnimationOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
