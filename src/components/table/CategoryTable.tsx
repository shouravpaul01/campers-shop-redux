import {
  FaArrowRightArrowLeft,
  FaCircleDot,
  FaPenToSquare,
} from "react-icons/fa6";


import { useState } from "react";
import Modal from "../ui/Modal";

import Loading from "../ui/Loading";
import { toast } from "react-toastify";
import { useGetSingleCategoryQuery, useUpdateCategoryMutation } from "../../redux/features/category/categoryApi";
import { TCategory, TCategoryTableProps } from "../../types/category.type";
import CreateUpdateCategoryForm from "../form/CreateUpdateCategoryForm";

const CategoryTable = ({ categories }: TCategoryTableProps) => {
  const [categoryId, setcategoryId] = useState<string | "">("");
  const { data: category, isFetching } = useGetSingleCategoryQuery(categoryId, {
    skip: !categoryId,
  });
  const [updateStatusCategory] = useUpdateCategoryMutation();

  const handleStatusUpdate = async (categoryId: string, status: boolean) => {
    const updateData = {
      categoryId: categoryId,
      status: status,
    };
    const res = await updateStatusCategory(updateData).unwrap();
    console.log(res)
    toast.success(res.message);
  };
  const hanleCloseModal = () => {
    setcategoryId("");
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table  bg-white rounded-none">
          {
            categories?.length==0 && <caption>
              Data not found!.
            </caption>
          }
          {/* head */}
          <thead className="bg-violet-300 text-sm text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Status</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category: TCategory, index: number) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{category.name}</td>
                <td>
                  <div className="flex gap-2 items-center justify-center">
                    <FaCircleDot
                      className={category.status ? "text-success" : "text-warning"}
                    />
                    <span>{category.status ? "Active" : "Inactive"}</span>
                    <button
                      className={`btn btn-sm btn-primary`}
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
                    className="btn btn-sm btn-primary"
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
