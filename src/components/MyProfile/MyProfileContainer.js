import React, {
  useCallback, useState, useEffect,
} from 'react'
import { deleteApiUser, getApiUser } from './api/myProfile'
import MyProfile from './MyProfile'

function MyProfileContainer() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)

  const getUserData = useCallback(async () => {
    const userDataResponse = await getApiUser()
    if (userDataResponse && userDataResponse.data) {
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

  }
  const handleDeleteUser = async (id) => {
    await deleteApiUser(id)
  }

  return (
    <>
      { userData && (
      <MyProfile
        data={userData}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={handleEditUser}
        id={user ? user.id : ''}
      />
      ) }
    </>
  )
}
export default MyProfileContainer
