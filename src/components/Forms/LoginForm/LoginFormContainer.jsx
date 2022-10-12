import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../../app/slices/auth/authSlice'
import LoginForm from './LoginForm'
import validateLogin from '../../../schemas/login';
import httpService from '../../../services/httpService';
import { setAlertOn } from '../../../app/slices/auth/alertSlice';

const LoginFormContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      const data = await httpService('post', 'auth/login', {
        email: values.email,
        password: values.password,
      })
      if (data.code === 200) {
        const userData = {
          id: data.body.user.id,
          roleId: data.body.user.roleId,
          userName: `${data.body.user.firstName} ${data.body.user.lastName}`,
          image: data.body.user.image,
          token: data.body.token,
        }
        dispatch(setUserData(userData))
        setTimeout(() => {
          dispatch(setAlertOn(true))
        }, 50)
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
