import React, {
    useCallback, useState, useEffect,
  } from 'react'
  import axios from 'axios'
  import NewsCards from './NewsCards'
  
  const NewsContainer = () => {
    const [news, setNews] = useState(null)
  
    const getNewsData = useCallback(async () => {
      const newsDataResponse = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/news`)
  
      if (newsDataResponse && newsDataResponse.data.body) {
        setNews(newsDataResponse.data.body)
      }
    }, [])
  
    useEffect(() => {
        getNewsData()
    }, [getNewsData])
  
  
    return (
        
        <NewsCards data={news}
        {...console.log(news)}
        /> 
    )
  }
  export default NewsContainer