import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Obligatorio'),
  image: Yup.mixed()
    .required('Obligatorio'),
})

export default validationSchema
