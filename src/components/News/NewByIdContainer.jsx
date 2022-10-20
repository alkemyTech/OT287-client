import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import httpService from '../../services/httpService'
import NewById from './NewById'

const NewByIdContainer = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    httpService('GET', `/news/${id}`)
      .then((response) => { setData(response.body) })
  }, [id])
  return (
    <Box sx={{ m: { lg: '60px 50px 10px 50px', xs: '30px 25px 5px 25px' } }}>
      <NewById data={data} />
    </Box>
  )
}

export default NewByIdContainer
