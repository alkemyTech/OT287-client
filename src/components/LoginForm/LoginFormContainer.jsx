import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import validateLogin from '../../schemas/login';
import httpService from '../../services/httpService';

const LoginFormContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      const data = await httpService('post', 'auth/login', {
        email: values.email,
        password: values.password,
      })
      if (data.status) {
        navigate('/')
      } else {
        setErrorStatus(data.response.status)
        setErrorMessage(data.response.statusText)
      }
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
