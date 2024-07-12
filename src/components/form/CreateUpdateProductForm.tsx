import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import {  SubmitHandler, useForm } from "react-hook-form";
import { FaArrowsRotate } from "react-icons/fa6";
import { productValidationSchema } from "../../validation/product.validation";
import { TProduct } from "../../types/product.type";
import { toast } from "react-toastify";
import { useGetAllActiveCategoriesQuery } from "../../redux/features/category/categoryApi";
import { TCategory } from "../../types/category.type";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../redux/features/product/productApi";

const CreateUpdateProductForm = ({
  editableData,
}: {
  editableData?: TProduct
}) => {
  const [isBtnSubmit, setIsBtnSubmit] = useState<boolean>(false);
  const { data: category } = useGetAllActiveCategoriesQuery(undefined);
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const {
    register,
    reset,
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: yupResolver(productValidationSchema),
  });
  useEffect(() => {
    if (editableData) {
      reset();
      setValue("_id", editableData._id);
      setValue("name", editableData.name);
      setValue("category", editableData.category);
      setValue("rating", editableData.rating);
      setValue("price", editableData.price);
      setValue("stockQuantity", editableData.stockQuantity);
      setValue("description", editableData.description);
    }else if (!editableData) {
      reset()
    }
  }, [editableData]);

  const handleCreate: SubmitHandler<TProduct> = async (data) => {
    setIsBtnSubmit(true);
    try {
      const formData=new FormData()
      formData.append("file",data.image[0])
      formData.append("data",JSON.stringify(data))
      
      const res = await createProduct(formData).unwrap();
      toast.success(res.message);
      reset();
    } catch (error: any) {
      console.log(error)
      const errorMessages = error?.data.errorMessages;
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
  const handleUpdate: SubmitHandler<TProduct> = async (data) => {
    setIsBtnSubmit(true);
    try {
      const formData=new FormData()
      formData.append("file",data.image[0])
      formData.append("data",JSON.stringify(data))
        const res = await updateProduct({_id:data._id,product:formData}).unwrap();
        console.log(res)
        toast.success(res.message);
    } catch (error: any) {
      console.log(error)
      const errorMessages = error?.data.errorMessages;
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
      <div className="flex flex-col md:flex-row gap-3">
        <label className="form-control w-full md:w-1/4">
          <span className="label-text ">
            Category <span className="text-red-500">*</span>
          </span>
          <select className="select select-bordered" {...register("category")}>
            <option value={""}>Select Category</option>

            {category?.data.map((category: TCategory, index: number) => (
              <option key={index}  value={category._id
              }>{category.name}</option>
            ))}
          </select>
          {errors.category && (
            <span className="text-red-500">{errors.category.message}</span>
          )}
        </label>
        <label className="form-control w-full md:w-2/4">
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
        <label className="form-control w-full md:w-1/4">
          <span className="label-text ">
            Rating <span className="text-red-500">*</span>
          </span>
          <input
            type="number"
            {...register("rating")}
            placeholder="Name"
            className="input input-bordered   w-full"
          />
          {errors.rating && (
            <span className="text-red-500">{errors.rating.message}</span>
          )}
        </label>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <label className="form-control w-full md:w-1/4">
          <span className="label-text ">
            Price <span className="text-red-500">*</span>
          </span>
          <input
            type="number"
            {...register("price")}
            placeholder="Price"
            className="input input-bordered   w-full"
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </label>
        <label className="form-control w-full md:w-1/4">
          <span className="label-text ">
            Stock Quantity <span className="text-red-500">*</span>
          </span>
          <input
            type="number"
            {...register("stockQuantity")}
            placeholder="Stock Quantity"
            className="input input-bordered   w-full"
          />
          {errors.stockQuantity && (
            <span className="text-red-500">{errors.stockQuantity.message}</span>
          )}
        </label>
        <label className="form-control w-full md:w-2/4">
          <span className="label-text ">
            Image <span className="text-red-500">*</span>
          </span>
          <input
            type="file"
            {...register("image")}
            className="file-input file-input-bordered file-input-success w-full "
          />

          {errors.image && (
            <span className="text-red-500">{errors.image.message}</span>
          )}
        </label>
      </div>

      <label className="form-control w-full ">
        <span className="label-text ">Description</span>

        <textarea
          className="textarea textarea-bordered resize-none"
          placeholder="Description"
          {...register("description")}
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

export default CreateUpdateProductForm;
