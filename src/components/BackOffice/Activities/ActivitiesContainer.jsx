import React from 'react'
import Activities from './Activities'

const activities = [

  {
    id: 1,
    name: 'Cena Comunitaria'
  },
  {
    id: 2,
    name: 'Recolecta de bolsones'
  },
  {
    id: 3,
    name: 'Donaciones en especie'
  },
  {
    id: 4,
    name: 'Educacion solidaria'
  },
  {
    id: 5,
    name: 'Retiro espiritual'
  },
  {
    id: 6,
    name: 'Conferencia Solidaria'
  },

]

const ActivitiesContainer = () => (
  <>
    <Activities activities={activities} />
  </>
)

export default ActivitiesContainer
