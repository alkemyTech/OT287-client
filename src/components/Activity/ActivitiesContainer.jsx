import React, { useEffect, useState } from 'react'
import Activities from './Activities'
import httpService from '../../services/httpService'

const ActivityContainer = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const getActivity = async () => {
      setLoading(true)
      try {
        const response = await httpService('get', '/activities')
        if (response.code === 200) {
            setData(response.body)
        }
      } catch (err) {
        setError(`Ha ocurrido un error: ${err.response}`)
      } finally {
        setLoading(false)
      }
    }

    getActivity()
  }, [])

  return (
    <Activities
      data={data}
      loading={loading}
      error={error}
    />
  )
}

export default ActivityContainer
