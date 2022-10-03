import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Obligatorio'),
  // content: Yup.string()
  //   .required('Obligatorio'),
  image: Yup.string()
    .required('Obligatorio'),
  categoryId: Yup.number()
    .required('Obligatorio'),
})

export default validationSchema
