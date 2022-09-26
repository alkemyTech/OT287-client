import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('Obligatorio'),
  lastName: Yup.string()
    .required('Obligatorio'),
  email: Yup.string().email('Dirección de mail inválida').required('Obligatorio'),
  password: Yup.string()
    .min(6, 'Debe tener al menos 6 caracteres')
    .required('Obligatorio'),
})

export default validationSchema
