import * as yup from 'yup';
const categorySchemaValidation = yup.object({
    name: yup.string().required("The field is required."),
    icon:  yup
    .mixed()
    .required("The field is required.")
    .test("fileFormat", "Only PNG format is allowed.", (value:any) => {
      return value && value[0] && value[0].type === "image/png";
    }),
});

export {categorySchemaValidation}