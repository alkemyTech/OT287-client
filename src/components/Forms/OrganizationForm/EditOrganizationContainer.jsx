import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import EditOrganizationForm from './EditOrganizationForm'

const EditOrganizationContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    const entries = Object.entries(values)
    const validEntries = entries.filter(([, value]) => !!value)
    try {
      axios
        .put(`${process.env.REACT_APP_API_DOMAIN}/organizations/${values.id}`, validEntries)
        .then(() => navigate('/backoffice'))
        .catch((error) => {
          setErrorStatus(error.response.status)
          setErrorMessage(error.response.statusText)
        })
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  const initialValues = {
    name: '',
    image: null,
  }

  return (
    <EditOrganizationForm
      initialValues={initialValues}
      onSubmitForm={onSubmitForm}
    />
  )
}

export default EditOrganizationContainer
