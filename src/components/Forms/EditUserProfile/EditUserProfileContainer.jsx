import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import httpService from '../../../services/httpService'
import Loader from '../../Loader/Loader'
import EditUserProfile from './EditUserProfile'

const EditUserProfileContainer = () => {
  const [editSucces, setEditSucces] = useState(false)
  const [user, setUser] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

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
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getUser()
  }, [])

  const editSuccesNavigation = () => {
    setTimeout(() => {
      navigate('/mi-perfil')
    }, 2000)
  }

  const onSubmitForm = async (values) => {
    const { id } = values
    try {
      await httpService('put', `users/${id}`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      })
      setEditSucces(true)
      editSuccesNavigation()
    } catch (error) {
      console.log(error)
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
    <EditUserProfile initialValues={initialValues} onSubmitForm={onSubmitForm} editSucces={editSucces} errorMessage={errorMessage} />
  )
}

export default EditUserProfileContainer
