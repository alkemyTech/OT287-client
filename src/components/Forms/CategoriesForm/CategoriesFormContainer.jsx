import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CategoriesForm from './CategoriesForm'
import validationSchema from '../../../schemas/categories'

import httpService from '../../../services/httpService'

const CategoriesFormContainer = () => {
  const { id } = useParams()
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
  })
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [succesMessage, setSuccesMessage] = useState('')

  const navigate = useNavigate()

  const findCategoryById = useCallback(async () => {
    const data = await httpService('put', `categories/${id}`)
    if (data.code === 200) {
      setInitialValues({
        name: data.body.name,
        description: data.body.description,
      })
    } else {
      setErrorMessage(data.response.statusText)
    }
  }, [id])

  useEffect(() => {
    findCategoryById(id)
  }, [id, findCategoryById])

  const onSubmitForm = async (values, idToEdit) => {
    let action = 'post'
    let endpoint = 'categories'

    if (idToEdit) {
      action = 'put'
      endpoint = `categories/${id}`
    }

    try {
      const data = await httpService(action, endpoint, {
        name: values.name,
        description: values.description,
      })
      if (data.code === 201) {
        setSuccesMessage('creada')
      }
      if (data.code === 200) {
        setSuccesMessage('actualizada')
      } else {
        setErrorStatus(data.response)
      }
      setTimeout(() => navigate('/back-office/categories'), 400)
    } catch (error) {
      setErrorMessage(error.response)
    }
  }

  return (
    <>
      <CategoriesForm
        // key={id}
        id={id}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmitForm={onSubmitForm}
        succesMessage={succesMessage}
        setSuccesMessage={setSuccesMessage}
        navigate={navigate}
        error={errorStatus}
        errorMessage={errorMessage}
        setErrorStatus={setErrorStatus}
      />
    </>
  )
}

export default CategoriesFormContainer
