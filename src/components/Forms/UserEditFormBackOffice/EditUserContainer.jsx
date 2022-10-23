import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Alert } from '@mui/material'
import httpService from '../../../services/httpService'
import EditUserForm from './EditUserForm'
import Loader from '../../Loader/Loader'
import validationSchema from '../../../schemas/users'

const EditUserContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState(null)
  const [editSucces, setEditSucces] = useState(false)
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    image: '',
    uploadedImage: '',
  })

  const { id } = useParams()
  const navigate = useNavigate()

  // Get user byId
  useEffect(() => {
    if (id) {
      const getUser = async () => {
        setLoading(true)
        try {
          const res = await httpService('get', `users/${id}`)
          if (res.code === 200) {
            setInitialValues({
              firstName: res.body.firstName,
              lastName: res.body.lastName,
              email: res.body.email,
              roleId: res.body.roleId,
              image: res.body.image,
            })
            setRole(res.body.roleId)
            setLoading(false)
          } else {
            setErrorStatus(res.response.status)
          }
          setLoading(false)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        }
      }
      getUser()
    }
  }, [id])

  const handleRole = (event) => {
    setRole(Number(event.target.value));
  };

  // Update user byId

  const editSuccesNavigation = () => {
    setTimeout(() => {
      navigate('/back-office/users')
    }, 2000)
  }
  const onSubmitForm = async (values, idToEdit) => {
    let action = 'post'
    let endpoint = 'auth/register'
    if (idToEdit) {
      action = 'put'
      endpoint = `users/ ${id}`
    }
    try {
      await httpService(action, endpoint, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        image: values.image.name,
        roleId: role,
      })
      setEditSucces(true)
      editSuccesNavigation()
    } catch (error) {
      setErrorStatus(error.response.status)
      setErrorMessage(error.response.statusText)
    }
  }

  if (loading) return <Loader />
  if (errorStatus === 404) return <Alert severity="error">Acceso denegado! No tienes las credenciales correspondientes</Alert>

  return (

    <EditUserForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitForm={onSubmitForm}
      error={errorStatus}
      errorMessage={errorMessage}
      role={role}
      handleRole={handleRole}
      editSucces={editSucces}
      id={id}
    />
  )
}

export default EditUserContainer
