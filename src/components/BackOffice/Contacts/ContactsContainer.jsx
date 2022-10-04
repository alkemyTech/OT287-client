import React, { useCallback, useEffect, useState } from 'react'
import httpService from '../../../services/httpService'
import Contacts from './Contacts'

const ContactsContainer = () => {
  const [contactsData, setContactsData] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)

  const getContactsData = useCallback(async () => {
    try {
      const data = await httpService('get', '/contacts')
      if (data.code === 200) {
        setContactsData(data.body)
      } else {
        setErrorStatus(data.response.statusText)
      }
    } catch (error) {
      setErrorStatus(error)
    }
  }, [])

  useEffect(() => {
    getContactsData()
  }, [getContactsData])

  return (
    <>
      <Contacts contacts={contactsData} errorStatus={errorStatus} />
    </>
  )
}

export default ContactsContainer
