import React, { useCallback, useEffect, useState } from 'react'
import httpService from '../../../services/httpService'
import Contacts from './Contacts'
import Loader from '../../Loader/Loader'
import { Alert } from '@mui/material'

const ContactsContainer = () => {
  const [contactsData, setContactsData] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const getContactsData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await httpService('get', '/contacts')
      if (data.code === 200) {
        setContactsData(data.body)
        setLoading(false)
      } else {
        setErrorStatus(data.response.statusText)
      }
      setLoading(false)
    } catch (error) {
      setErrorStatus(error)
    }
  }, [])

  useEffect(() => {
    getContactsData()
  }, [getContactsData])

  if (loading) {
    return <Loader color={'#DB5752'} height={'30%'} width={'50vw'} />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return (
    <>
      <Contacts contacts={contactsData} errorStatus={errorStatus} />
    </>
  )
}

export default ContactsContainer
