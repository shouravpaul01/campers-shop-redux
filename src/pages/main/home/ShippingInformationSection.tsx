import { FaArrowRotateRight, FaCartShopping } from "react-icons/fa6"
import { GoTrophy } from "react-icons/go"
import { RiSecurePaymentLine } from "react-icons/ri"


const ShippingInformationSection = () => {
  return (
    <div className="my-9 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-white p-6">
        <div className="flex items-center gap-5">
            <p className="text-4xl text-deepgreen"><FaCartShopping/></p>
            <div>
                <p className="font-bold ">Free Shipping</p>
                <p className="text-gray-500 text-sm">When ordering over $100</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <p className="text-4xl text-deepgreen"><FaArrowRotateRight /></p>
            <div>
                <p className="font-bold ">Free Return</p>
                <p className="text-gray-500 text-sm">Get Return within 30 days</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <p className="text-4xl text-deepgreen"><RiSecurePaymentLine /></p>
            <div>
                <p className="font-bold ">Secure Payment</p>
                <p className="text-gray-500 text-sm">100% Secure Online Payment</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <p className="text-4xl text-deepgreen"><GoTrophy /></p>
            <div>
                <p className="font-bold ">Best Quality</p>
                <p className="text-gray-500 text-sm">Original Product Guarenteed</p>
            </div>
        </div>
    </div>
  )
}

export default ShippingInformationSection
