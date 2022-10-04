import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Obligatorio'),
  description: Yup.string()
    .required('Obligatorio'),
})

export default validationSchema
