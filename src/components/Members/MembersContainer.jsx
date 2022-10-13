import React, {
  useCallback, useState, useEffect,
  useRef,
} from 'react'
import { Box, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom';
import MembersCards from './MembersCards'
import httpService from '../../services/httpService';
import MemberBanner from './MemberBanner';

const MembersContainer = () => {
  const [members, setMembers] = useState([])
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [memberBanner, setMemberBanner] = useState(null)
  const [membersFiltered, setMembersFiltered] = useState(null)
  const componentMounted = useRef(true)

  const location = useLocation().pathname;

  const handleMemberBanner = (data) => {
    setMemberBanner(data)
  }

  const handleFilteredMembers = (member, memberList) => {
    const filtered = memberList.filter((m) => m.id !== member.id)
    setMembersFiltered(filtered)
  }

  const getMembersData = useCallback(async () => {
    try {
      const data = await httpService('get', '/members')
      if (data.code === 200) {
        if (componentMounted.current) {
          setMembers(data.body)
          setMemberBanner(data.body[0])
          handleFilteredMembers(data.body[0], data.body)
        }
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
    return () => { componentMounted.current = false }
  }, [getMembersData])

  useEffect(() => {
    if (memberBanner) {
      handleFilteredMembers(memberBanner, members)
    }
  }, [memberBanner, members])

  return (
    <Box sx={{ m: '120px 60px 20px 60px' }}>
      <MemberBanner data={memberBanner} />
      <Typography sx={{
        fontSize: 24, mt: 10, fontWeight: 700, textAlign: 'center', mb: 4,
      }}
      >
        Nuestro Staff
      </Typography>
      <MembersCards
        data={membersFiltered}
        error={errorStatus}
        errorMessage={errorMessage}
        handleMemberBanner={handleMemberBanner}
        location={location}
      />
    </Box>
  )
}
export default MembersContainer
