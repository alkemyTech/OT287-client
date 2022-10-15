import * as Yup from 'yup'

const validationSchema = Yup.object({
  imageUrl: Yup.mixed()
    .required('Obligatorio'),
  text: Yup.string()
    .required('Obligatorio'),
  order: Yup.number()
    .required('Obligatorio'),
  organizationId: Yup.number()
    .required('Obligatorio'),
})

export default validationSchema
