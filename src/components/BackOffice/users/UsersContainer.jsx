import { Alert } from '@mui/material'
import React, { useState, useEffect } from 'react'
import httpService from '../../../services/httpService'
import Loader from '../../Loader/Loader'
import Users from './Users'

const UsersContainer = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorStatus, setErrorStatus] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true)
      try {
        const res = await httpService('get', '/users')
        if (res.code === 200) {
          setUsers(res.body)
          setLoading(false)
        } else {
          setErrorStatus(res.response.status)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])

  if (loading) {
    return <Loader />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return <Users users={users} />
}

export default UsersContainer
