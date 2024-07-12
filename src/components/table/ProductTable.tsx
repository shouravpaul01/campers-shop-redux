import { useState } from "react";
import { FaArrowRightArrowLeft, FaCircleDot, FaPenToSquare, FaPlus } from "react-icons/fa6";
import { TProduct } from "../../types/product.type";
import Modal from "../ui/Modal";
import CreateUpdateProductForm from "../form/CreateUpdateProductForm";
import { useGetSingleProductQuery, useUpdateStatusProductMutation } from "../../redux/features/product/productApi";
import { toast } from "react-toastify";

type TProductTable={
    products:TProduct[]
}
const ProductTable = ({products}:TProductTable) => {
    const [productId, setProductId] = useState<string | "">("");
    const [updateStatusProduct]=useUpdateStatusProductMutation()
    const { data: product, isFetching } = useGetSingleProductQuery(productId, {
      skip: !productId,
    });

    const handleStatusUpdate = async (productId: string, status: boolean) => {
      const updateData = {
        productId: productId,
        status: status,
      };
      const res = await updateStatusProduct(updateData).unwrap();
      toast.success(res.message);
    };
      const hanleCloseModal = () => {
        setProductId("");
      };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table  bg-white rounded-none">
          {/* head */}
          {
            products?.length==0 &&  <caption className="caption-bottom text-lg p-2">
            Data not found!
          </caption>
          }
          <thead className="bg-violet-300 text-sm text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock Qty</th>
              <th>Status</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product:TProduct, index: number) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={product.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.name}</div>
              <div className="text-sm opacity-50">{product.category?.name}</div>
            </div>
          </div>
                </td>
                <td>{product.price} TK</td>
                <td>{product.stockQuantity}</td>
                
                <td>
                  <div className="flex gap-2 items-center">
                    <FaCircleDot
                      className={product.status ?"text-primary" : "text-error"}
                    />
                    <span>{product.status ? "Active" : "Inactive"}</span>
                    <button
                      className={`btn btn-sm btn-accent`}
                      onClick={() =>
                        handleStatusUpdate(product._id!,product.status ? false : true
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
          modalId={productId}
          modalTitle="Edit Product"
          hanleCloseModal={hanleCloseModal}
        >
          <CreateUpdateProductForm editableData={product?.data}/>
        </Modal>
    </>
  )
}

export default ProductTable
