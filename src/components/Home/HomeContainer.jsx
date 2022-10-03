import React, { useState, useEffect } from 'react'
import httpService from '../../services/httpService'
import Home from './Home'

const sliderImg = [
  {
    id: 1,
    imageUrl: 'https://i.imgur.com/bQqeQ99.png',
  },
  {
    id: 2,
    imageUrl: 'https://i.imgur.com/bQqeQ99.png',
  },
  {
    id: 3,
    imageUrl: 'https://i.imgur.com/bQqeQ99.png',
  },
  {
    id: 4,
    imageUrl: 'https://i.imgur.com/bQqeQ99.png',
  },
]
const HomeContainer = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    httpService('GET', '/news').then((response) => {
      if (response.body && response.body.length > 4) {
        setData(response.body.slice(response.body.length - 4))
      } else {
        setData(response.body)
      }
    })
  }, [])
  return (
    <Home news={data} slider={sliderImg} />
  )
}
export default HomeContainer
