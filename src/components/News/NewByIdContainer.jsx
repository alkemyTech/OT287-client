import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import httpService from '../../services/httpService'
import NewById from './NewById'

const NewByIdContainer = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    httpService('GET', `/news/${id}`)
      .then((response) => { setData(response.body) })
  }, [])
  return <NewById data={data} />
}

export default NewByIdContainer
