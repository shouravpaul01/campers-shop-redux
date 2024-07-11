import { useState } from "react";
import { FaArrowRightArrowLeft, FaCircleDot, FaPenToSquare, FaPlus } from "react-icons/fa6";
import { TProduct } from "../../types/product.type";
import Modal from "../ui/Modal";
import CreateVariantForm from "../form/CreateVariantForm";

type TProductTable={
    products:TProduct[]
    setProductId:(productId:string)=>void
}
const ProductTable = ({products,setProductId}:TProductTable) => {
    const [brandId, setBrandId] = useState<string | "">("");
    
    const handleStatusUpdate = async () => {
        
      };
      const hanleCloseModal = () => {
        setBrandId("");
      };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table  bg-white rounded-none">
          {/* head */}
          <thead className="bg-violet-300 text-sm text-black">
            <tr>
              <th></th>
              <th>Model Name</th>
              <th>Variants</th>
              <th>Status</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product:TProduct, index: number) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                <div className="font-bold">{product.model}</div>
                <div className="text-sm opacity-50">{ product.brand.name }</div>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-circle btn-primary"
                    onClick={() => {
                      setBrandId(product._id!);
                    }}
                  >
                    <FaPlus />
                  </button>
                </td>
                <td>
                  <div className="flex gap-2 items-center justify-center">
                    <FaCircleDot
                      className={product.status ? "text-success" : "text-warning"}
                    />
                    <span>{product.status ? "Active" : "Inactive"}</span>
                    <button
                      className={`btn btn-sm btn-primary`}
                      onClick={() =>
                        handleStatusUpdate(
                        )
                      }
                    >
                      <FaArrowRightArrowLeft />
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => setProductId(product._id!)}
                  >
                    <FaPenToSquare />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
      width="max-w-3xl w-3/5"
          modalId={brandId}
          modalTitle="Edit Brand"
          hanleCloseModal={hanleCloseModal}
        >
          <CreateVariantForm/>
        </Modal>
    </>
  )
}

export default ProductTable
