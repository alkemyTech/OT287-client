import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactForm from './ContactForm'
import validationSchema from '../../../schemas/contact'
import httpService from '../../../services/httpService'

const ContactFormContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [contactCreated, setContactCreated] = useState(false)

  const navigate = useNavigate()

  const onSubmitForm = async (values, actions) => {
    try {
      const data = await httpService('post', '/contacts', {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      if (data.code === 200) {
        setContactCreated(true); actions.resetForm()
      } else {
        setErrorStatus(data.response.status)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }
  const initialValues = {
    name: '',
    email: '',
    message: '',
  }
  return (
    <>

      <ContactForm
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

export default ContactFormContainer
