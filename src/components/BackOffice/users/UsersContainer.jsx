import React from 'react'
import Users from './Users'

const users = [

  {
    id: 1,
    nombre: 'Laureano',
    apellido: 'Marrero',
    email: 'email1@gmail.com',
  },
  {
    id: 2,
    nombre: 'Jordi',
    apellido: 'Trillo',
    email: 'email2@gmail.com',
  },
  {
    id: 3,
    nombre: 'Luis',
    apellido: 'Vidal',
    email: 'email3@gmail.com',
  },
  {
    id: 4,
    nombre: 'Elia',
    apellido: 'Pineda',
    email: 'email4@gmail.com',
  },
  {
    id: 5,
    nombre: 'Feliciana',
    apellido: 'Castro',
    email: 'email5@gmail.com',
  },
  {
    id: 6,
    nombre: 'Octavio',
    apellido: 'Belmonte',
    email: 'email6@gmail.com',
  },

]

const UsersContainer = () => (
  <div>
    <Users users={users} />
  </div>
)

export default UsersContainer
