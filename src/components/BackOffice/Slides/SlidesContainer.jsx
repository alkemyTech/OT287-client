import React, { useCallback, useEffect, useState } from 'react'
import { Alert } from '@mui/material'
import httpService from '../../../services/httpService'
import Slides from './Slides'
import Loader from '../../Loader/Loader'

const SlidesContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [errorStatus, setErrorStatus] = useState('')
  const [deletedSuccess, setDeletedSuccess] = useState(false)
  const [dataSlides, setDataSlides] = useState([])
  const [errorStatusSlides, setErrorStatusSlides] = useState('')
  const [loading, setLoading] = useState(false)

  const getSlidesData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await httpService('get', '/slides')
      if (data.code === 200) {
        setDataSlides(data.body)
        setLoading(false)
      } else {
        setErrorStatusSlides(data.code)
      }
      setLoading(false)
    } catch (error) {
      setErrorStatusSlides(error.response)
    }
  }, [])
  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/slides/${id}`)
      if (data.code === 200) {
        setDeletedSuccess(true)
        getSlidesData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getSlidesData()
  }, [getSlidesData])

  if (loading) {
    return <Loader color="#DB5752" height="30%" width="50vw" />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return (
    <>
      <div>
        <Slides
          slides={dataSlides}
          handleModal={handleModal}
          setHandleModal={setHandleModal}
          setElementToDelete={setElementToDelete}
          elementToDelete={elementToDelete}
          deleteElement={deleteElement}
          deletedSuccess={deletedSuccess}
          errorStatus={errorStatus}
          errorStatusSlides={errorStatusSlides}
          setDeletedSuccess={setDeletedSuccess}
        />
      </div>
    </>
  )
}

export default SlidesContainer
