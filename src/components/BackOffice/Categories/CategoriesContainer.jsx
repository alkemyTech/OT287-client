import React, { useEffect, useState } from 'react'
import Categories from './Categories'
import httpService from '../../../services/httpService'

const cardFields = {
  title: 'name',
  content: 'description',
  imageUrl: null,
}

const nestedRoutes = {
  create: '',
  edit: '',
  delete: '',
}

const CategoriesContainer = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [deletedSuccess, setDeletedSuccess] = useState(false)
  const [errorStatus, setErrorStatus] = useState('')

  const getCategories = async () => {
    try {
      const response = await httpService('get', 'categories')
      if (response.code === 200) {
        setData(response.body)
      } else {
        setError(`Ha ocurrido un error: ${response.message}`)
      }
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
      deletedSucces={deletedSuccess}
      setDeletedSucces={setDeletedSuccess}
      errorStatus={errorStatus}
    />
  )
}

export default CategoriesContainer
