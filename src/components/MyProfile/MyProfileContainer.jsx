import React, {
  useCallback, useState, useEffect,
} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MyProfile from './MyProfile'

// la ruta '/me' es un get que devuelve la información del usuario contenida en un token.
// A modo de ejemplo se puse utilizar un token válido y setearlo en el header de axios
axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiZWxpIiwibGFzdE5hbWUiOiJiIiwiZW1haWwiOiJlbGlAZ21haWwuY29tIiwiaW1hZ2UiOm51bGwsInBhc3N3b3JkIjoiRWxpODg4ODgiLCJyb2xlSWQiOjIsImRlbGV0ZWRBdCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAxMi0xMi0yNVQwMDowMDowMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAxMi0xMi0yNVQwMDowMDowMC4wMDBaIiwiaWF0IjoxNjYzODUyNDEwfQ.OZG6p_bJGgA90Kmxd89T0cEnceVDWBCBdsCXNhTwbGM'

const MyProfileContainer = () => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [userDelete, setUserDelete] = useState(false)

  const navigate = useNavigate()

  const getUserData = useCallback(async () => {
    const userDataResponse = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/auth/me`)

    if (userDataResponse && userDataResponse.data.body) {
      setUser(userDataResponse.data.body)
      setUserData(
        [
          {
            id: 1,
            label: 'Nombre',
            text: userDataResponse.data.body.firstName,
          },
          {
            id: 2,
            label: 'Apellido',
            text: userDataResponse.data.body.lastName,
          },
          {
            id: 3,
            label: 'Email',
            text: userDataResponse.data.body.email,
          },
        ],

      )
    }
  }, [])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  const handleEditUser = () => {
    // esta función dirige al formulario para editar los datos del usuario
  }
  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_DOMAIN}/users/${id}`)
      if (response.data) {
        setUserDelete(true)
        navigate('/')
      }
    } catch (error) {
      setErrorStatus(error.response.status)
    }
  }

  return (
    <>
      { userData && (
      <MyProfile
        data={userData}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={handleEditUser}
        id={user ? user.id : ''}
        userDelete={userDelete}
        errorStatus={errorStatus}
      />
      ) }
    </>
  )
}
export default MyProfileContainer
