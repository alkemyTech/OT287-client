import React, {
  useCallback, useState, useEffect,
} from 'react'
import { useNavigate } from 'react-router-dom'
import MyProfile from './MyProfile'
import httpService from '../../services/httpService'

const MyProfileContainer = () => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [userDelete, setUserDelete] = useState(false)

  const navigate = useNavigate()

  const getUserData = useCallback(async () => {
    const userDataResponse = await httpService('get', '/auth/me')

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

  const handleDeleteUser = async (id) => {
    try {
      const res = await httpService('delete', `/users/${id}`)
      if (res.code === 200) {
        setUserDelete(true)
        navigate('/logout')
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
