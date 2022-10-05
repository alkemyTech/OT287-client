import React, {
  useCallback, useState, useEffect,
} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MyProfile from './MyProfile'

// la ruta '/me' es un get que devuelve la información del usuario contenida en un token.
// A modo de ejemplo se puse utilizar un token válido y setearlo en el header de axios
// axios.defaults.headers.common.Authorization ='Bearer tokenValido'

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
        id={user ? user.id : ''}
        userDelete={userDelete}
        errorStatus={errorStatus}
      />
      ) }
    </>
  )
}
export default MyProfileContainer
