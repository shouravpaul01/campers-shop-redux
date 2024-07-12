import * as yup from "yup";

export const productValidationSchema = yup.object({
  name: yup.string().required("The field is required.").trim(),
  category: yup.string().required("The field is required"),
  price: yup
    .number()
    .required("The field is required")
    .min(0, "Price must be a positive number")
    .typeError("Price must be a number"),
  stockQuantity: yup
    .number()
    .required("Stock Quantity is required")
    .integer("Stock Quantity must be an integer")
    .min(0, "Price must be a positive number")
    .typeError("Stock Quantity must be a number"),
  image: yup
    .mixed()
    .required("The field is required."),
  description: yup.string().required("The field is required"),
  rating: yup
    .number()
    .typeError("Rating must be a number")
    .min(0, "Rating must be less than 0.")
    .max(5, "Rating must be greather than 5."),
});
