import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import RegisterForm from './RegisterForm'
import validationSchema from '../../schemas/register'
import httpService from '../../services/httpService';

const RegisterFormContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      const data = await httpService('post', 'auth/register', {
        firstName: values.firstName,
        lastName: values.lastName,
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
      setErrorStatus(error.response)
    }
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  return (
    <RegisterForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitForm={onSubmitForm}
      error={errorStatus}
      errorMessage={errorMessage}
    />
  )
}

export default RegisterFormContainer
