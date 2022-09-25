import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import RegisterForm from './RegisterForm'
import validationSchema from '../../schemas/register'

const RegisterFormContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      axios
        .post(`${process.env.REACT_APP_API_DOMAIN}/auth/register`, {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        })
        .then(() => navigate('/login'))
        .catch((error) => {
          setErrorStatus(error.response.status)
          setErrorMessage(error.response.statusText)
        })
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
