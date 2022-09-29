import React from 'react'
import News from './News'

const news = [

  {
    id: '1',
    name: 'Lorem Ipsum causes Chaos',
    image: 'https://picsum.photos/200/300',
    createdAt: '2022-09-26 23:24:39',
  },
  {
    id: '2',
    name: 'Lorem Ipsum takes over',
    image: 'https://picsum.photos/300/300',
    createdAt: '2022-09-25 23:24:39',
  },
  {
    id: '3',
    name: 'Lorem Ipsum strikes again',
    image: 'https://picsum.photos/200/300',
    createdAt: '2022-09-21 23:24:39',
  },
  {
    id: '4',
    name: 'Lorem Ipsum the revenge',
    image: 'https://picsum.photos/200/300',
    createdAt: '2022-09-19 23:24:39',
  },
  {
    id: '5',
    name: 'Lorem Ipsum vs asdasdasd',
    image: 'https://picsum.photos/200/300',
    createdAt: '2022-09-10 23:24:39',
  },
  {
    id: '6',
    name: 'Lorem Ipsum goes aaaaaaaaaaaaaaaa',
    image: 'https://picsum.photos/200/300',
    createdAt: '2022-08-26 23:24:39',
  },

]

const NewsContainer = () => (
  <div>
    <News news={news} />
  </div>
)

export default NewsContainer
