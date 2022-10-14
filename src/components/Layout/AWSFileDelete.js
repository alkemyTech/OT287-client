import ReactS3Client from 'react-aws-s3-typescript'

const AWSFileDelete = async (fileName) => {
  const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    dirName: process.env.REACT_APP_AWS_BUCKET_DIRNAME,
    region: process.env.REACT_APP_AWS_BUCKET_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
    s3Url: process.env.REACT_APP_AWS_S3URL,
  }

  const s3 = new ReactS3Client(config)

  try {
    await s3.deleteFile(fileName)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  }
}

export default AWSFileDelete
