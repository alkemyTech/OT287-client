
import React, { useCallback, useEffect, useState } from 'react'
import httpService from '../../../services/httpService'
import Activities from './Activities'

const ActivitiesContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [errorStatus, setErrorStatus] = useState('')
  const [deletedSucces, setDeletedSucces] = useState(false)
  const [dataActivities, setDataActivities] = useState([])
  const [errorStatusActivities, setErrorStatusActivities] = useState('')

  const getActivitiesData = useCallback(async () => {
    try {
      const data = await httpService('get', '/activities')
      if (data.code === 200) {
        setDataActivities(data.body)
      } else {
        setErrorStatusActivities(data.code)
      }
    } catch (error) {
      setErrorStatusActivities(error.response)
    }
  }, [])
  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/activities/${id}`)
      if (data.code === 200) {
        setDeletedSucces(true)
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
        deletedSucces={deletedSucces}
        errorStatus={errorStatus}
        errorStatusActivities={errorStatusActivities}
        setDeletedSucces={setDeletedSucces}
      />
    </div>
  </>
  )
}

export default ActivitiesContainer
