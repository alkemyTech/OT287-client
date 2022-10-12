import React, { useCallback, useEffect, useState } from 'react'
import httpService from '../../../services/httpService'
import News from './News'
import Loader from '../../Loader/Loader'
import { Alert } from '@mui/material'

const NewsContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [errorStatus, setErrorStatus] = useState('')
  const [deletedSucces, setDeletedSucces] = useState(false)
  const [dataNews, setDataNews] = useState([])
  const [errorStatusNews, setErrorStatusNews] = useState('')
  const [loading, setLoading] = useState(false)

  const getNewsData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await httpService('get', '/news')
      if (data.code === 200) {
        setDataNews(data.body)
        setLoading(false)
      } else {
        setErrorStatusNews(data.code)
      }
      setLoading(false)
    } catch (error) {
      setErrorStatusNews(error.response)
    }
  }, [])
  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/news/${id}`)
      if (data.code === 200) {
        setDeletedSucces(true)
        getNewsData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getNewsData()
  }, [getNewsData])

  if (loading) {
    return <Loader color={'#DB5752'} height={'30%'} width={'50vw'} />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return (
    <div>
      <News
        news={dataNews}
        handleModal={handleModal}
        setHandleModal={setHandleModal}
        setElementToDelete={setElementToDelete}
        elementToDelete={elementToDelete}
        deleteElement={deleteElement}
        deletedSucces={deletedSucces}
        errorStatus={errorStatus}
        getNewsData={getNewsData}
        errorStatusNews={errorStatusNews}
        setDeletedSucces={setDeletedSucces}
      />
    </div>
  )
}

export default NewsContainer
