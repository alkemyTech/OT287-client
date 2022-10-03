import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditOrganizationForm from './EditOrganizationForm'
import validationSchema from '../../../schemas/organization'
import httpService from '../../../services/httpService';

const EditOrganizationContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [dataOrg, setDataOrg] = useState({})

  const navigate = useNavigate()
  const { id } = useParams()

  const getOrganizationData = useCallback(async () => {
    try {
      const data = await httpService('get', `organizations/${id}/public`)
      if (data.code === 200) {
        setDataOrg(data.body)
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }, [id])

  const onSubmitForm = async (values) => {
    try {
      await httpService('put', `organizations/${id}/edit`, values)
      navigate('/back-office')
    } catch (error) {
      setErrorStatus(error.response.status)
      setErrorMessage(error.response.statusText)
    }
  }

  const initialValues = {
    name: dataOrg.name,
    image: dataOrg.image,
    address: dataOrg.address,
    phone: dataOrg.phone,
    email: dataOrg.email,
    fbUrl: dataOrg.fbUrl,
    igUrl: dataOrg.igUrl,
    ldUrl: dataOrg.ldUrl,
    welcomeText: dataOrg.welcomeText,
    aboutUsText: dataOrg.aboutUsText,
  }

  useEffect(() => {
    getOrganizationData()
  }, [getOrganizationData])

  return (
    <EditOrganizationForm
      initialValues={initialValues}
      onSubmitForm={onSubmitForm}
      validationSchema={validationSchema}
      error={errorStatus}
      errorMessage={errorMessage}
    />
  )
}

export default EditOrganizationContainer
