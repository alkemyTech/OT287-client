import React, {
  useCallback, useState, useEffect,
} from 'react'
import MembersCard from './MembersCard'
import httpService from '../../services/httpService';

const MembersContainer = () => {
  const [members, setMembers] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const getMembersData = useCallback(async () => {
    try {
      const data = await httpService('get', '/members')
      if (data.code === 200) {
        setMembers(data.body)
      } else {
        setErrorStatus(data.response.status)
        setErrorMessage(data.response.statusText)
      }
    } catch (error) {
      setErrorStatus(`Error has occurred: ${error.response}`)
    }
  }, [])

  useEffect(() => {
    getMembersData()
  }, [getMembersData])

  return (

    <MembersCard
      data={members}
      error={errorStatus}
      errorMessage={errorMessage}
    />
  )
}
export default MembersContainer
