import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NewsForm from './NewsForm'
import validationSchema from '../../../schemas/news'
import httpService from '../../../services/httpService'
import AWSFileDelete from '../../Layout/AWSFileDelete'

const NewsFormContainer = () => {
  const { id } = useParams()
  const [initialValues, setInitialValues] = useState({
    name: '',
    content: '',
    image: '',
    uploadedImage: '',
    categoryId: 1,
  })
  const [previousImage, setPreviousImage] = useState(null)
  const [previousImageFullName, setPreviousImageFullName] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const getData = await httpService('get', `news/${id}`)
          setPreviousImageFullName(getData.body.image.split('com/')[1].split('/')[1])
          setPreviousImage(getData.body.image.split('com/')[1].split('/')[1].slice(15))
          setInitialValues({
            name: getData.body.name,
            content: getData.body.content,
            image: getData.body.image,
            uploadedImage: previousImage || '',
            categoryId: getData.body.categoryId,
          })
        } catch (error) {
          setErrorStatus(error.response.status)
          setErrorMessage(error.response.statusText)
        }
      })()
    }
  }, [id, previousImage])

  const onSubmitForm = async (values, idToEdit) => {
    let action = 'post'
    let endpoint = 'news'
    let deleteImage = 0

    if (idToEdit) {
      action = 'put'
      endpoint = `news/${id}`
      if (values.image.split('com/')[1].split('/')[1] !== previousImageFullName) {
        deleteImage = 1
      }
    }

    try {
      if (deleteImage === 1) {
        await AWSFileDelete(previousImageFullName, 'news')
      }
      const data = await httpService(action, endpoint, {
        name: values.name,
        content: values.content,
        image: values.image,
        categoryId: values.categoryId,
      })
      if (data.code === 200) {
        navigate('/back-office/news')
      } else {
        setErrorStatus(data.response.status)
        setErrorMessage(data.response.statusText)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  return (
    <NewsForm
      key={id}
      id={id}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitForm={onSubmitForm}
      error={errorStatus}
      errorMessage={errorMessage}
    />
  )
}

export default NewsFormContainer
