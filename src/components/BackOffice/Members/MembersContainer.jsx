import React, { useCallback, useEffect, useState } from 'react'
import { Alert } from '@mui/material'
import httpService from '../../../services/httpService'
import Members from './Members'
import Loader from '../../Loader/Loader'

const MembersContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [errorStatus, setErrorStatus] = useState('')
  const [deletedSuccess, setDeletedSuccess] = useState(false)
  const [dataMembers, setDataMembers] = useState([])
  const [errorStatusMembers, setErrorStatusMembers] = useState('')
  const [loading, setLoading] = useState(false)

  const getMembersData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await httpService('get', '/members')
      if (data.code === 200) {
        setDataMembers(data.body)
        setLoading(false)
      } else {
        setErrorStatusMembers(data.code)
      }
      setLoading(false)
    } catch (error) {
      setErrorStatusMembers(error.response)
    }
  }, [])
  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/members/${id}`)
      if (data.code === 200) {
        setDeletedSuccess(true)
        getMembersData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getMembersData()
  }, [getMembersData])

  if (loading) {
    return <Loader color="#DB5752" height="30%" width="50vw" />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return (
    <>
      <div>
        <Members
          members={dataMembers}
          handleModal={handleModal}
          setHandleModal={setHandleModal}
          setElementToDelete={setElementToDelete}
          elementToDelete={elementToDelete}
          deleteElement={deleteElement}
          deletedSuccess={deletedSuccess}
          errorStatus={errorStatus}
          errorStatusMembers={errorStatusMembers}
          setDeletedSuccess={setDeletedSuccess}
        />
      </div>
    </>
  )
}

export default MembersContainer
