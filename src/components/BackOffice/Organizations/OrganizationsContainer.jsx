import React, { useCallback, useEffect, useState } from 'react'
import { Alert } from '@mui/material'
import httpService from '../../../services/httpService'
import Organizations from './Organization'
import Loader from '../../Loader/Loader'

const OrganizationsContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [errorStatus, setErrorStatus] = useState('')
  const [deletedSuccess, setDeletedSuccess] = useState(false)
  const [dataOrganizations, setDataOrganizations] = useState([])
  const [errorStatusOrganizations, setErrorStatusOrganizations] = useState('')
  const [loading, setLoading] = useState(false)

  const getOrganizationsData = useCallback(async () => {
    setLoading(true)
    try {
      const data = await httpService('get', '/organizations')
      if (data.code === 200) {
        setDataOrganizations(data.body)
        setLoading(false)
      } else {
        setErrorStatusOrganizations(data.code)
      }
      setLoading(false)
    } catch (error) {
      setErrorStatusOrganizations(error.response)
    }
  }, [])
  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/organizations/${id}`)
      if (data.code === 200) {
        setDeletedSuccess(true)
        getOrganizationsData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getOrganizationsData()
  }, [getOrganizationsData])

  if (loading) {
    return <Loader color="#DB5752" height="30%" width="50vw" />
  }
  if (errorStatus === 404) {
    return <Alert severity="error">No se encontraron usuarios</Alert>
  }
  return (
    <>
      <div>
        <Organizations
          organizations={dataOrganizations}
          handleModal={handleModal}
          setHandleModal={setHandleModal}
          setElementToDelete={setElementToDelete}
          elementToDelete={elementToDelete}
          deleteElement={deleteElement}
          deletedSuccess={deletedSuccess}
          errorStatus={errorStatus}
          errorStatusOrganizations={errorStatusOrganizations}
          setDeletedSuccess={setDeletedSuccess}
        />
      </div>
    </>
  )
}

export default OrganizationsContainer
