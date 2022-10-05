import React, {
  useCallback, useState, useEffect,
} from 'react'
import { Box } from '@mui/material'
import MembersCards from './MembersCards'
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
    <Box sx={{m:'120px 100px 20px 100px'}}>
      <MembersCards
        data={members}
        error={errorStatus}
        errorMessage={errorMessage}
      />
    </Box>
  )
}
export default MembersContainer
