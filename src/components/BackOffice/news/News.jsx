import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {
  Box, Table, TableRow, TableHead, TableContainer,
  TableCell, TableBody, Paper, Typography,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModal from './DeleteModal';


const News = (
  props,
) => {
  const {
    news, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSucces, errorStatus, getNewsData, errorStatusNews,
    setDeletedSucces,
  } = props
  return (
    <>
      <Box>
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginY: { lg: '40px', xs: '10px' }, fontWeight: 'bold' }}
        >
          Lista de Novedades
        </Typography>
        <TableContainer
          sx={{
            position: 'absolute',
            top: '180px',
            height: '400px',
            overflow: 'auto',
            width: { lg: '80%', xs: '100%' },
          }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgb(240,240,240)' }}>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>URL Imagen</b></TableCell>
                <TableCell><b>Fecha creacion</b></TableCell>
                <TableCell align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {news && news.map((elem) => (

                <TableRow key={elem.id}>
                  <TableCell
                  sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {elem.name}
                  </TableCell>
                  <TableCell
                    sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.image}

                  </TableCell>
                  <TableCell
                    sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.createdAt}

                  </TableCell>
                  <TableCell sx={{ padding: '0', width: '25%' }} align="center">
                    <>
                    <Link to={`${elem.id}/edit`}>
                      <EditIcon sx={{
                        opacity: '0.5',
                        padding: '1px',
                        border: '1px solid red',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        color: 'red',
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
                          backgroundColor: 'red',
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
              )) }
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
        deletedSucces={deletedSucces}
        errorStatus={errorStatus}
        getNewsData={getNewsData}
        setElementToDelete={setElementToDelete}
        setDeletedSucces={setDeletedSucces}
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
  elementToDelete: PropTypes.oneOfType([PropTypes.object]).isRequired,
  deleteElement: PropTypes.func.isRequired,
  deletedSucces: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string.isRequired,
  getNewsData: PropTypes.func.isRequired,
  errorStatusNews: PropTypes.string.isRequired,
  setDeletedSucces: PropTypes.func.isRequired,
}
export default News
