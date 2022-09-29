import React, { useState, useEffect } from 'react'
import HeaderContainer from '../Header/HeaderContainer'
import Home from './Home'
import FooterContainer from '../footer/FooterContainer'
import httpService from '../../services/httpService'

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
      setData(response.body)
    })
  }, [])
  return (
    <div>
      <div>
        <HeaderContainer />

        <Home news={data.slice(data.length - 4)} slider={sliderImg} />
        <FooterContainer />
      </div>
    </div>
  )
}
export default HomeContainer
