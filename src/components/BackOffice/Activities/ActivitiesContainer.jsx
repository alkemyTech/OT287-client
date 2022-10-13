
import React, { useCallback, useEffect, useState } from 'react'
import httpService from '../../../services/httpService'
import Activities from './Activities'
import Loader from '../../Loader/Loader'
import { Alert } from '@mui/material'

const ActivitiesContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [errorStatus, setErrorStatus] = useState('')
  const [deletedSuccess, setDeletedSuccess] = useState(false)
  const [dataActivities, setDataActivities] = useState([])
  const [errorStatusActivities, setErrorStatusActivities] = useState('')
  const [loading, setLoading] = useState(false)

  const getActivitiesData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await httpService('get', '/activities')
      if (data.code === 200) {
        setDataActivities(data.body)
        setLoading(false)
      } else {
        setErrorStatusActivities(data.code)
      }
      setLoading(false)
    } catch (error) {
      setErrorStatusActivities(error.response)
    }
  }, [])
  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/activities/${id}`)
      if (data.code === 200) {
        setDeletedSuccess(true)
        getActivitiesData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getActivitiesData()
  }, [getActivitiesData])

  if (loading) {
    return <Loader color={'#DB5752'} height={'30%'} width={'50vw'} />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return (
  <>
    <div>
      <Activities
        activities={dataActivities}
        handleModal={handleModal}
        setHandleModal={setHandleModal}
        setElementToDelete={setElementToDelete}
        elementToDelete={elementToDelete}
        deleteElement={deleteElement}
        deletedSuccess={deletedSuccess}
        errorStatus={errorStatus}
        errorStatusActivities={errorStatusActivities}
        setDeletedSuccess={setDeletedSuccess}
      />
    </div>
  </>
  )
}

export default ActivitiesContainer
