import {
  FaArrowRightArrowLeft,
  FaCircleDot,
  FaPenToSquare,
} from "react-icons/fa6";
import { useState } from "react";
import Modal from "../ui/Modal";

import Loading from "../ui/Loading";
import { toast } from "react-toastify";
import {
  useGetSingleCategoryQuery,
  useUpdateStatusCategoryMutation,
} from "../../redux/features/category/categoryApi";
import { TCategory, TCategoryTableProps } from "../../types/category.type";
import CreateUpdateCategoryForm from "../form/CreateUpdateCategoryForm";

const CategoryTable = ({ categories }: TCategoryTableProps) => {
  const [categoryId, setcategoryId] = useState<string | "">("");
  const { data: category, isFetching } = useGetSingleCategoryQuery(categoryId, {
    skip: !categoryId,
  });
  const [updateStatusCategory] = useUpdateStatusCategoryMutation();

  const handleStatusUpdate = async (categoryId: string, status: boolean) => {
    const updateData = {
      categoryId: categoryId,
      status: status,
    };
    const res = await updateStatusCategory(updateData).unwrap();
    console.log(res);
    toast.success(res.message);
  };
  const hanleCloseModal = () => {
    setcategoryId("");
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table  bg-white rounded-none">
          {categories?.length == 0 && <caption>Data not found!.</caption>}
          {/* head */}
          <thead className="bg-[#92C6C5] text-sm text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category: TCategory, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={category.icon}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div className="font-bold">{category.name}</div>
                  </div>
                </td>
                <td>{category.description}</td>
                <td>
                  <div className="flex gap-2 items-center ">
                    <FaCircleDot
                      className={
                        category.status ? "text-primary" : "text-error"
                      }
                    />
                    <span>{category.status ? "Active" : "Inactive"}</span>
                    <button
                      className={`btn btn-sm btn-outline-deepgreen rounded-[4px]`}
                      onClick={() =>
                        handleStatusUpdate(
                          category._id!,
                          category.status ? false : true
                        )
                      }
                    >
                      <FaArrowRightArrowLeft />
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-deepgreen rounded-[4px]"
                    onClick={() => {
                      setcategoryId(category._id!);
                    }}
                  >
                    <FaPenToSquare />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isFetching ? (
        <Loading />
      ) : (
        <Modal
          modalId={categoryId}
          modalTitle="Edit Category"
          hanleCloseModal={hanleCloseModal}
        >
          <CreateUpdateCategoryForm editableData={category?.data} />
        </Modal>
      )}
    </>
  );
};

export default CategoryTable;
