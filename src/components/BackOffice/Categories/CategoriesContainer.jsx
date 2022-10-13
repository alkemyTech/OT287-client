import React, { useEffect, useState } from 'react'
import Categories from './Categories'
import httpService from '../../../services/httpService'
import Loader from '../../Loader/Loader'
import { Alert } from '@mui/material'

const cardFields = {
  title: 'name',
  content: 'description',
  imageUrl: null,
}

const nestedRoutes = {
  create: '',
  edit: 'edit',
  delete: '',
}

const CategoriesContainer = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [deletedSuccess, setDeletedSuccess] = useState(false)
  const [errorStatus, setErrorStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const getCategories = async () => {
    setLoading(true)
    try {
      const response = await httpService('get', 'categories')
      if (response.code === 200) {
        setData(response.body)
        setLoading(false)
      } else {
        setError(`Ha ocurrido un error: ${response.message}`)
      }
      setLoading(false)
    } catch (err) {
      setError(`Ha ocurrido un error: ${err.response}`)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const deleteElement = async (id) => {
    try {
      const deletedData = await httpService('delete', `/categories/${id}`)
      if (deletedData.code === 200) {
        setDeletedSuccess(true)
        getCategories()
      } else {
        setErrorStatus(deletedData.code)
      }
    } catch (e) {
      setErrorStatus(e.response)
    }
  }

  if (loading) {
    return <Loader color={'#DB5752'} height={'30%'} width={'50vw'} />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return (
    <Categories
      data={data}
      cardFields={cardFields}
      nestedRoutes={nestedRoutes}
      error={error}
      handleModal={handleModal}
      setHandleModal={setHandleModal}
      setElementToDelete={setElementToDelete}
      elementToDelete={elementToDelete}
      deleteElement={deleteElement}
      deletedSuccess={deletedSuccess}
      setDeletedSuccess={setDeletedSuccess}
      errorStatus={errorStatus}
    />
  )
}

export default CategoriesContainer
