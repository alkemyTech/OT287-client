import React, {
  useCallback, useState, useEffect,
} from 'react'
import NewsCards from './NewsCards'
import httpService from '../../services/httpService';

const NewsContainer = () => {
  const [news, setNews] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const getNewsData = useCallback(async () => {
    try {
      const data = await httpService('get', '/news')
      if (data.code === 200) {
        setNews(data.body)
      } else {
        setErrorStatus(data.response.status)
        setErrorMessage(data.response.statusText)
      }
    } catch (error) {
      setErrorStatus(`Error has occurred: ${error.response}`)
    }
  }, [])

  useEffect(() => {
    getNewsData()
  }, [getNewsData])

  return (

    <NewsCards
      data={news}
      error={errorStatus}
      errorMessage={errorMessage}
    />
  )
}
export default NewsContainer
