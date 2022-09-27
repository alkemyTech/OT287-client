import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import validateLogin from '../../schemas/login';

const LoginFormContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      axios
        .post(`${process.env.REACT_APP_API_DOMAIN}/auth/login`, {
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
      validationSchema={validateLogin}
      onSubmitForm={onSubmitForm}
      error={errorStatus}
      errorMessage={errorMessage}
    />
  )
}

export default LoginFormContainer
