import React, {
  useCallback, useState, useEffect,
} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MyProfile from './MyProfile'

function MyProfileContainer() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [userDelete, setUserDelete] = useState(false)

  const navigate = useNavigate()

  const getUserData = useCallback(async () => {
    const userDataResponse = {
      id: '1',
      firstName: 'Carlos',
      lastName: 'Garcia',
      email: 'carlosgarcia@gmail.com',
      deleteAt: null,
    }
    // el usuario se extrae del token almacenado en localStorage

    if (userDataResponse && userDataResponse.deleteAt !== null) {
      navigate('/')
    } else {
      setUser(userDataResponse)
      setUserData(
        [
          {
            id: 1,
            label: 'Nombre',
            text: userDataResponse.firstName,
          },
          {
            id: 2,
            label: 'Apellido',
            text: userDataResponse.lastName,
          },
          {
            id: 3,
            label: 'Email',
            text: userDataResponse.email,
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
