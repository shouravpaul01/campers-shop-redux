import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const Register = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-[4px] bg-white shadow-md">
       <div className="border-b border-deepgreen border-dashed pb-2">
       <h1 className="text-2xl font-bold ">Register</h1>
       < p className=" text-gray-500">Create an account to get started</p>
       </div>
        <form  className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name<span className="text-red-400">*</span></span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered rounded-[4px] w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name<span className="text-red-400">*</span></span>
              </label>
              <input
                type="text"
               
               placeholder="Last Name"
                className="input input-bordered rounded-[4px] w-full"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email<span className="text-red-400">*</span></span>
            </label>
            <input
              type="email"
              
             placeholder="Email"
              className="input input-bordered rounded-[4px] w-full"
              required
            />
          </div>
          <div className="form-control  ">
              <label className="label">
                <span className="label-text">Password<span className="text-red-400">*</span></span>
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
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-deepgreen rounded-[4px] w-full">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
