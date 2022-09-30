import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Activity from './Activity'
import httpService from '../../services/httpService'

const ActivityContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const getActivity = async (activityId) => {
      setLoading(true)
      try {
        const response = await httpService('get', `activities/${activityId}`)
        if (response.code !== 200) return
        setData(response.body)
      } catch (err) {
        setError(`Ha ocurrido un error: ${err.response}`)
      } finally {
        setLoading(false)
      }
    }

    getActivity(id)
  }, [id])

  return (
    <Activity
      data={data}
      loading={loading}
      error={error}
    />
  )
}

export default ActivityContainer
