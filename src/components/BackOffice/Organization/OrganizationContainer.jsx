import React, { useCallback, useEffect, useState } from 'react'
import { Alert } from '@mui/material'
import httpService from '../../../services/httpService'
import Organization from './Organization'
import Loader from '../../Loader/Loader'

const OrganizationContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [errorStatus, setErrorStatus] = useState('')
  const [deletedSuccess, setDeletedSuccess] = useState(false)
  const [dataOrganization, setDataOrganization] = useState([])
  const [errorStatusOrganization, setErrorStatusOrganization] = useState('')
  const [loading, setLoading] = useState(false)

  const getOrganizationData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await httpService('get', '/organizations')
      if (data.code === 200) {
        setDataOrganization(data.body)
        setLoading(false)
      } else {
        setErrorStatusOrganization(data.code)
      }
      setLoading(false)
    } catch (error) {
      setErrorStatusOrganization(error.response)
    }
  }, [])
  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/organizations/${id}`)
      if (data.code === 200) {
        setDeletedSuccess(true)
        getOrganizationData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getOrganizationData()
  }, [getOrganizationData])

  if (loading) {
    return <Loader color="#DB5752" height="30%" width="50vw" />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return (
    <>
      <div>
        <Organization
          organization={dataOrganization}
          handleModal={handleModal}
          setHandleModal={setHandleModal}
          setElementToDelete={setElementToDelete}
          elementToDelete={elementToDelete}
          deleteElement={deleteElement}
          deletedSuccess={deletedSuccess}
          errorStatus={errorStatus}
          errorStatusOrganization={errorStatusOrganization}
          setDeletedSuccess={setDeletedSuccess}
        />
      </div>
    </>
  )
}

export default OrganizationContainer
