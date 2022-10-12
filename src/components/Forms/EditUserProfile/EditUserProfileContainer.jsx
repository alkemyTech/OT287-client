import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUserData } from '../../../app/slices/auth/authSlice'
import httpService from '../../../services/httpService'
import Loader from '../../Loader/Loader'
import EditUserProfile from './EditUserProfile'

const EditUserProfileContainer = () => {
  const [editSucces, setEditSucces] = useState(false)
  const [user, setUser] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getUser = async () => {
    setLoading(true)
    try {
      const res = await httpService('get', '/auth/me')
      if (res.code === 200) {
        setUser(res.body)
        setLoading(false)
      } else {
        setErrorMessage(res.response.message)
      }
    } catch (error) {
      setErrorMessage(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])

  const editSuccesNavigation = () => {
    setTimeout(() => {
      navigate('/mi-perfil')
    }, 1000)
  }

  const onSubmitForm = async (values) => {
    const { id } = values
    try {
      const res = await httpService('put', `users/${id}`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      })
      const userData = {
        id: res.body.updateUser.id,
        userName: `${res.body.updateUser.firstName} ${res.body.updateUser.lastName}`,
        image: res.body.updateUser.image,
        token: res.body.token,
      }
      dispatch(updateUserData(userData))
      setEditSucces(true)
      editSuccesNavigation()
    } catch (error) {
      setErrorMessage(error)
    }
  }

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    id: user.id,

  }
  if (loading) return <Loader />
  return (
    <EditUserProfile
      initialValues={initialValues}
      onSubmitForm={onSubmitForm}
      editSucces={editSucces}
      errorMessage={errorMessage}
    />
  )
}

export default EditUserProfileContainer
