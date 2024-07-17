import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowsRotate } from "react-icons/fa6";
import { TCategory } from "../../types/category.type";
import { categorySchemaValidation } from "../../validation/category.validation";
import { toast } from "react-toastify";
import { useCreateCategoryMutation, useUpdateCategoryMutation } from "../../redux/features/category/categoryApi";

const CreateUpdateCategoryForm =  ({editableData}:{editableData?:TCategory | undefined}) => {
  
    const [isBtnSubmit, setIsBtnSubmit] = useState<boolean>(false);
    const [createCategory] = useCreateCategoryMutation();
    const [updateCatgeory] = useUpdateCategoryMutation();
    const {
      register,
      reset,
      handleSubmit,
      setValue,
      setError,
      formState: { errors },
    } = useForm<TCategory>({
      resolver: yupResolver(categorySchemaValidation),
    });
    useEffect(() => {
      if (editableData) {
        reset();
        setValue("_id", editableData._id);
        setValue("name", editableData.name);
        setValue("description", editableData.description);
      }
    }, [editableData]);
  
    const handleCreate: SubmitHandler<TCategory> = async (data) => {
      setIsBtnSubmit(true);
      try {
        const res = await createCategory(data).unwrap();
        toast.success(res.message);
        reset();
      } catch (error:any) {
        const errorMessages=error?.data.errorMessages;
        if (errorMessages.length > 0) {
          errorMessages.forEach((errorMessage: any) =>
            setError(errorMessage.path, {
              type: "manual",
              message: errorMessage.message,
            })
          );
        }
        
      }
      setIsBtnSubmit(false);
    };
    const handleUpdate: SubmitHandler<TCategory> = async (data) => {
      setIsBtnSubmit(true);
      console.log(data)
      try {
        const updateData = {
          _id: data._id,
          category: {
            name: data.name,
            description: data.description,
          },
        };
        const res = await updateCatgeory(updateData).unwrap();
        toast.success(res.message);
      } catch (error:any) {
        const errorMessages=error?.data.errorMessages ;
        if (errorMessages.length > 0) {
          errorMessages.forEach((errorMessage: any) =>
            setError(errorMessage.path, {
              type: "manual",
              message: errorMessage.message,
            })
          );
        }
      }
      setIsBtnSubmit(false);
    };
    return (
      <form onSubmit={handleSubmit(editableData ? handleUpdate : handleCreate)}>
        {editableData && <input type="text" {...register("_id")} hidden />}
        <label className="form-control w-full ">
          <span className="label-text ">
            Name <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="input input-bordered   w-full"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </label>
        <label className="form-control w-full ">
          <span className="label-text ">Description</span>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered resize-none"
            placeholder="Description"
          ></textarea>
        </label>
  
        <button
          type="submit"
          className={`btn btn-success my-3 ${isBtnSubmit ? "disabled" : ""}`}
        >
          <FaArrowsRotate />
          {editableData ? "Update" : "Submit"}
        </button>
      </form>
    );
  };

export default CreateUpdateCategoryForm
