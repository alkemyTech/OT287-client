import S3 from 'react-aws-s3'

const AWSFileUpload = async (file, folder) => {
  const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    dirName: folder,
    region: process.env.REACT_APP_AWS_BUCKET_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
    s3Url: process.env.REACT_APP_AWS_S3URL,
  }

  const getName = (async () => {
    const name = file.name.replace(' ', '_')
    const date = new Date()
    const fullName = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}_${name}`
    return fullName
  })

  const fileNewName = await getName()

  const ReactS3Client = new S3(config)

  const awsPost = await ReactS3Client
    .uploadFile(file, fileNewName)
    .then((data) => data.location)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
  return awsPost
}

export default AWSFileUpload
