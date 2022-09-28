import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Contact from './Contact'
import validationSchema from '../../schemas/contact'

const ContactContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [contactCreated, setContactCreated] = useState(false)

  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      // acac falta usar el servicio que crearon http
      axios
        .post(`${process.env.REACT_APP_API_DOMAIN}/contacts`, {
          name: values.name,
          email: values.email,
          message: values.message,
        })
        .then(() => setContactCreated(true))
        .catch((error) => {
          setErrorStatus(error.code)// aca cachea el error de axios y esta en error.code
        })
    } catch (error) {
      setErrorStatus(error)
    }
  }

  const initialValues = {
    name: '',
    email: '',
    message: '',
  }
  return (
    <>
      <Contact
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmitForm={onSubmitForm}
        errorStatus={errorStatus}
        navigate={navigate}
        setErrorStatus={setErrorStatus}
        contactCreated={contactCreated}
        setContactCreated={setContactCreated}
      />
    </>
  )
}
export default ContactContainer
