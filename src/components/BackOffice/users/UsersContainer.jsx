import { Alert } from '@mui/material'
import React, { useState, useEffect, useCallback } from 'react'
import httpService from '../../../services/httpService'
import Loader from '../../Loader/Loader'
import Users from './Users'

const UsersContainer = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorStatusUsers, setErrorStatusUsers] = useState('')
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [deletedSuccess, setDeletedSuccess] = useState(false)

  const getUsersData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await httpService('get', '/users')
      if (data.code === 200) {
        setUsers(data.body)
        setLoading(false)
      } else {
        setErrorStatusUsers(data.code)
      }
      setLoading(false)
    } catch (error) {
      setErrorStatusUsers(error.response)
    }
  }, [])

  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/users/${id}`)
      if (data.code === 200) {
        setDeletedSuccess(true)
        getUsersData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getUsersData()
  }, [getUsersData])



  if (loading) {
    return <Loader color={'#DB5752'} height={'30%'} width={'50vw'} />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return  <Users 
  users={users}
  handleModal={handleModal}
  setHandleModal={setHandleModal}
  setElementToDelete={setElementToDelete}
  elementToDelete={elementToDelete}
  deleteElement={deleteElement}
  deletedSuccess={deletedSuccess}
  errorStatus={errorStatus}
  errorStatusUsers={errorStatusUsers}
  setDeletedSuccess={setDeletedSuccess}
  />
}

export default UsersContainer
