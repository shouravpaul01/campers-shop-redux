import * as yup from "yup";
const productvalidationSchema = yup.object({
  brand: yup.string().required("The field is required."),
  model: yup.string().required("The field is required."),
  releaseDate: yup.date().required("The field is required."),
  discount: yup
    .number()
    .typeError("Discount must be a number")
    .min(0, "Discount must be greater than 0.")
    .max(99.99, "Discount must be less than 100")
    .nullable(),
  specifications: yup.string().required("The field is required."),
  shortDescription: yup.string(),
  longDescription: yup.string().required("The field is required."),
  warranty: yup.string().required("The field is required."),
  rating: yup.mixed(),
});

export { productvalidationSchema };
