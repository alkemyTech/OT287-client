import * as Yup from 'yup';

const validationSchema = () => Yup.object({
  name: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
})

export default validationSchema
