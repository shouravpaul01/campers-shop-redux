import * as yup from 'yup';
const categorySchemaValidation=yup.object({
    name:yup.string().required("The field is required."),
})

export {categorySchemaValidation}