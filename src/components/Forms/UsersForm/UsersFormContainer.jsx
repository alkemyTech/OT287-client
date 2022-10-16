import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Alert } from '@mui/material'
import httpService from '../../../services/httpService'
import EditUserForm from './UsersForm'
import Loader from '../../Loader/Loader'

const EditUserContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState('')
  const [editSucces, setEditSucces] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  // Get user byId
  useEffect(() => {
    const getUser = async () => {
      setLoading(true)
      try {
        const res = await httpService('get', `users/${id}`)
        if (res.code === 200) {
          setUser(res.body)
          setRole(res.body.roleId)
          setLoading(false)
        } else {
          setErrorStatus(res.response.status)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [id])

  // Update user byId

  const editSuccesNavigation = () => {
    setTimeout(() => {
      navigate('/back-office/users')
    }, 2000)
  }
  const onSubmitForm = async (values) => {
    try {
      await httpService('put', `users/${id}`, {
        firstName: values.firstName,
        lastName: values.lastName,
        roleId: role,
      })
      setEditSucces(true)
      editSuccesNavigation()
    } catch (error) {
      setErrorStatus(error.response.status)
      setErrorMessage(error.response.statusText)
    }
  }

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    roleId: user.roleId,
  }

  if (loading) return <Loader />
  if (errorStatus === 404) return <Alert severity="error">Acceso denegado! No tienes las credenciales correspondientes</Alert>

  return (

    <EditUserForm
      initialValues={initialValues}
      onSubmitForm={onSubmitForm}
      error={errorStatus}
      errorMessage={errorMessage}
      role={role}
      handleRole={handleRole}
      editSucces={editSucces}
    />

  )
}

export default EditUserContainer
