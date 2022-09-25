import React, { useState } from 'react';
import axios from 'axios'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'

const LoginFormContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      axios
        .post('http://localhost:3000/auth/login', {
          email: values.email,
          password: values.password,
        })
        .then(() => navigate('/'))
        .catch((error) => {
          setErrorStatus(error.response.status)
          setErrorMessage(error.response.statusText)
        })
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  const initialValues = {
    email: '',
    password: '',
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Dirección de mail inválida').required('Obligatorio'),
    password: Yup.string()
      .min(6, 'Debe tener al menos 6 caracteres')
      .required('Obligatorio'),
  })

  return (
    <LoginForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitForm={onSubmitForm}
      error={errorStatus}
      errorMessage={errorMessage}
    />
  )
}

export default LoginFormContainer
