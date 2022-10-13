import S3 from 'react-aws-s3'

const AWSFileUpload = async (file) => {
  const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    dirName: process.env.REACT_APP_AWS_BUCKET_DIRNAME,
    region: process.env.REACT_APP_AWS_BUCKET_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
    s3Url: process.env.REACT_APP_AWS_S3URL,
  }

  const ReactS3Client = new S3(config)

  const awsPost = await ReactS3Client
    .uploadFile(file, file.name)
    .then((data) => data.location)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
  return awsPost
}

export default AWSFileUpload
