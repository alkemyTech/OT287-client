import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Box, Table, TableRow, TableHead, TableContainer,
  TableCell, TableBody, Paper, Typography,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import EditIcon from '@mui/icons-material/Edit'
import DeleteModal from '../../Layout/DeleteModal'

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

const News = (
  props,
) => {
  const {
    news, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSuccess, errorStatus, getNewsData, errorStatusNews,
    setDeletedSuccess,
  } = props
  return (
    <>
      <Box sx={{ mx: { xs: 2.5, md: 0 } }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ my: { lg: '1rem', xs: '0.63rem' }, fontWeight: 'bold' }}
        >
          Lista de Novedades
        </Typography>
        <TableContainer
          sx={{
            overflow: 'auto',
          }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgb(240,240,240)' }}>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell align="center"><b>Imagen</b></TableCell>
                <TableCell><b>Contenido</b></TableCell>
                <TableCell><b>Fecha creacion</b></TableCell>
                <TableCell align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {news && news.map((elem) => (

                <TableRow key={elem.id} height="60px">
                  <TableCell
                    sx={{ width: '15%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      margin: '1px', padding: '0', width: '10%',
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        margin: '3px auto',
                        height: '60px',
                        width: '60px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                      src={isImage(elem.image) || elem.image.length > 10 ? elem.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH2cSl_mcI1heNKNhcs7Qpg0OVCh8AsiD5A&usqp=CAU'}
                      alt="news image"
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '45%', textOverflow: 'ellipsis',
                    }}
                    dangerouslySetInnerHTML={{ __html: elem.content.length < 80 ? elem.content : `${elem.content.substring(0, 80)}...` }}
                  />
                  <TableCell
                    sx={{ width: '15%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.createdAt}

                  </TableCell>
                  <TableCell sx={{ padding: '0', width: '10 %' }} align="center">
                    <>
                      <Link to={`${elem.id}/edit`}>
                        <EditIcon sx={{
                          opacity: '0.5',
                          padding: '1px',
                          border: '1px solid #DB5752',
                          borderRadius: '5px',
                          backgroundColor: 'white',
                          color: '#DB5752',
                          fontSize: '1.8rem',
                          margin: '0 5px',
                          cursor: 'pointer',
                          '&:hover': { opacity: '1' },
                        }}
                        />
                      </Link>

                      <HighlightOffIcon
                        sx={{
                          opacity: '0.5',
                          padding: '1px',
                          borderRadius: '5px',
                          backgroundColor: '#DB5752',
                          color: 'white',
                          fontSize: '1.8rem',
                          margin: '0 5px',
                          cursor: 'pointer',
                          '&:hover': { opacity: '1' },
                        }}
                        onClick={() => {
                          setHandleModal(true)
                          setElementToDelete(elem)
                        }}
                      />

                    </>
                  </TableCell>
                </TableRow>
              ))}
              {errorStatusNews ? 'Error al traer Novedades' : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <DeleteModal
        openModal={handleModal}
        setHandleModal={setHandleModal}
        elementToDelete={elementToDelete}
        deleteElement={deleteElement}
        deletedSuccess={deletedSuccess}
        errorStatus={errorStatus}
        getNewsData={getNewsData}
        setElementToDelete={setElementToDelete}
        setDeletedSuccess={setDeletedSuccess}
      />
    </>
  )
}

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.string,
  })).isRequired,
  handleModal: PropTypes.bool.isRequired,
  setHandleModal: PropTypes.func.isRequired,
  setElementToDelete: PropTypes.func.isRequired,
  elementToDelete: PropTypes.oneOfType([PropTypes.object]),
  deleteElement: PropTypes.func.isRequired,
  deletedSuccess: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string.isRequired,
  getNewsData: PropTypes.func.isRequired,
  errorStatusNews: PropTypes.string.isRequired,
  setDeletedSuccess: PropTypes.func.isRequired,
}

News.defaultProps = {
  elementToDelete: null,
}

export default News
