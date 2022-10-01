import React, {
  useCallback, useState, useEffect,
} from 'react'
import { useNavigate } from 'react-router-dom'
import MyProfile from './MyProfile'
import httpService from '../../services/httpService'
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
    const userDataResponse = await httpService("GET","/auth/me")
    
    if (userDataResponse && userDataResponse.body) {
      setUser(userDataResponse.body)
      setUserData(
        [
          {
            id: 1,
            label: 'Nombre',
            text: userDataResponse.body.firstName,
          },
          {
            id: 2,
            label: 'Apellido',
            text: userDataResponse.body.lastName,
          },
          {
            id: 3,
            label: 'Email',
            text: userDataResponse.body.email,
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
      const response = await httpService("DELETE",`/users/${id}`)
      if (response) {
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
