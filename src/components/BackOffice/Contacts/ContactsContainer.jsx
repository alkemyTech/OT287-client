import React, { useCallback, useEffect, useState } from 'react'
import { Alert } from '@mui/material'
import httpService from '../../../services/httpService'
import Contacts from './Contacts'
import Loader from '../../Loader/Loader'

const ContactsContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [errorStatus, setErrorStatus] = useState('')
  const [deletedSuccess, setDeletedSuccess] = useState(false)
  const [contactsData, setContactsData] = useState(null)
  const [errorStatusContact, setErrorStatusContact] = useState(null)
  const [loading, setLoading] = useState(false)

  const getContactsData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await httpService('get', '/contacts')
      if (data.code === 200) {
        setContactsData(data.body)
        setLoading(false)
      } else {
        setErrorStatusContact(data.response.statusText)
      }
      setLoading(false)
    } catch (error) {
      setErrorStatus(error)
    }
  }, [])

  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/news/${id}`)
      if (data.code === 200) {
        setDeletedSuccess(true)
        getContactsData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getContactsData()
  }, [getContactsData])

  if (loading) {
    return <Loader color="#DB5752" height="30%" width="50vw" />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return (
    <>
      <Contacts
        contacts={contactsData}
        errorStatusContact={errorStatusContact}
        handleModal={handleModal}
        setHandleModal={setHandleModal}
        setElementToDelete={setElementToDelete}
        elementToDelete={elementToDelete}
        deleteElement={deleteElement}
        deletedSuccess={deletedSuccess}
        errorStatus={errorStatus}
        setDeletedSuccess={setDeletedSuccess}
      />
    </>
  )
}

export default ContactsContainer
