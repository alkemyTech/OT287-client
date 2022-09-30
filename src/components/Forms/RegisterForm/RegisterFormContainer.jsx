import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../../app/slices/auth/authSlice'
import RegisterForm from './RegisterForm'
import validationSchema from '../../../schemas/register'
import httpService from '../../../services/httpService';

const RegisterFormContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      const data = await httpService('post', 'auth/register', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      })

      if (data.code === 200) {
        try {
          const regData = await httpService('post', 'auth/login', {
            email: values.email,
            password: values.password,
          })
          const userData = {
            id: regData.body.user.id,
            userName: `${regData.body.user.firstName} ${regData.body.user.lastName}`,
            image: regData.body.user.image,
            token: regData.body.token,
          }
          dispatch(setUserData(userData))
        } catch (error) {
          setErrorStatus(`Ha ocurrido un error: ${error.response}`)
        }
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
