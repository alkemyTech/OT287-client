import React, { useState, useEffect } from 'react'
import httpService from '../../services/httpService'
import Home from './Home'

const sliderImg = [
  {
    id: 1,
    imageUrl: 'images/sliderImg1.jpg',
  },
  {
    id: 2,
    imageUrl: 'images/sliderImg2.jpg',
  },
  {
    id: 3,
    imageUrl: 'images/sliderImg3.jpg',
  },
  {
    id: 4,
    imageUrl: 'images/sliderImg4.jpg',
  },
]
const HomeContainer = () => {
  const [data, setData] = useState([])
  const [members, setMembers] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await httpService('get', '/news')
        if (data.code === 200 && data.body && data.body.length > 2) {
          setData(data.body.slice(data.body.length - 2))
        } else {
          setErrorStatus(data.code)
          setErrorMessage(data.body.response.statusText)
        }
      } catch (error) {
        setErrorStatus(`Error has occurred: ${error.response}`)
      }
    }
    const getMembers = async () => {
      try {
        const data = await httpService('get', '/members')
        if (data.code === 200 && data.body && data.body.length > 6) {
          setMembers(data.body.slice(data.body.length - 6))
        } else {
          setErrorStatus(data.response.status)
          setErrorMessage(data.response.statusText)
        }
      } catch (error) {
        setErrorStatus(`Error has occurred: ${error.response}`)
      }
    }
    getNews()
    getMembers()
  }, [])
  return (
    <Home
      news={data}
      members={members}
      slider={sliderImg}
      error={errorStatus}
      errorMessage={errorMessage} />
  )
}
export default HomeContainer
