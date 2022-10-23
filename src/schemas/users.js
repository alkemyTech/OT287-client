import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('Obligatorio'),
  lastName: Yup.string()
    .required('Obligatorio'),
  email: Yup.string()
    .email('Dirección de mail inválida')
    .required('Obligatorio'),
  roleId: Yup.number()
    .required('Obligatorio'),
})

export default validationSchema
