// IMPORTANTE: HAY SETEAR EL BUCKET (O LA CARPETA) COMO PUBLIC-READ PARA QUE PUEDA FUNCIONAR.
// Ver https://github.com/Developer-Amit/react-aws-s3

import S3 from 'react-aws-s3'

const AWSFileUpload = async (file) => {
  const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    dirName: process.env.REACT_APP_AWS_BUCKET_DIRNAME,
    region: process.env.REACT_APP_AWS_BUCKET_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  }

  const ReactS3Client = new S3(config)

  await ReactS3Client
    .uploadFile(file)
    .then((data) => data)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

// EJEMPLO DE CÓMO SERÍA LA RUTA QUE DEVUELVE: `https://myBucket.s3.amazonaws.com/${file.name}`

export default AWSFileUpload
