import React, { useCallback, useEffect, useState } from 'react'
import httpService from '../../../services/httpService'
import News from './News'

const NewsContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [elementToDelete, setElementToDelete] = useState({})
  const [errorStatus, setErrorStatus] = useState('')
  const [deletedSucces, setDeletedSucces] = useState(false)
  const [dataNews, setDataNews] = useState([])
  const [errorStatusNews, setErrorStatusNews] = useState('')

  const getNewsData = useCallback(async () => {
    try {
      const data = await httpService('get', '/news')
      if (data.code === 200) {
        setDataNews(data.body)
      } else {
        setErrorStatusNews(data.code)
      }
    } catch (error) {
      setErrorStatusNews(error.response)
    }
  }, [])
  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/news/${id}`)
      if (data.code === 200) {
        setDeletedSucces(true)
        getNewsData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getNewsData()
  }, [getNewsData])

  return (
    <div>
      <News
        news={dataNews}
        handleModal={handleModal}
        setHandleModal={setHandleModal}
        setElementToDelete={setElementToDelete}
        elementToDelete={elementToDelete}
        deleteElement={deleteElement}
        deletedSucces={deletedSucces}
        errorStatus={errorStatus}
        getNewsData={getNewsData}
        errorStatusNews={errorStatusNews}
        setDeletedSucces={setDeletedSucces}
      />
    </div>
  )
}

export default NewsContainer
