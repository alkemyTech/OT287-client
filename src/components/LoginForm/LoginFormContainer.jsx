import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import validationSchema from '../../schemas/login';

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
      setErrorStatus(`Ha ocurrido un error: ${error.response}`)
    }
  }

  const initialValues = {
    email: '',
    password: '',
  }

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
