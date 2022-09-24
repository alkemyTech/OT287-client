import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HeaderContainer from '../../../components/Header/HeaderContainer'
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
    axios.get('http://localhost:3001/news').then((response) => {
      setData(response.data.body)
    })
  }, [])
  return (
    <div>
      <div>
        <HeaderContainer />

        <Home news={data} slider={sliderImg} />
      </div>
    </div>
  )
}
export default HomeContainer
