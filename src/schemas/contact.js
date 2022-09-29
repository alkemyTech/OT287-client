import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Obligatorio'),
  email: Yup.string().email('Dirección de mail inválida').required('Obligatorio'),
  message: Yup.string()
    .required('Obligatorio'),
})

export default validationSchema
