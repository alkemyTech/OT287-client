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

const Categories = (props) => {
  const {
    data, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSuccess, errorStatus, error, setDeletedSuccess,
  } = props

  return (
    <>
      <Box sx={{ mx: { xs: 2.5, md: 0 } }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ my: { lg: '1rem', xs: '0.63rem' }, fontWeight: 'bold' }}
        >
          Lista de Categorías
        </Typography>
        <TableContainer
          sx={{
            overflow: 'auto',
          }}
          component={Paper}
        >
          <Table stickyHeader sx={{ height: '100%' }}>
            <TableHead>
              <TableRow sx={{ '& .MuiTableCell-head': { backgroundColor: '#f0f0f0' } }}>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Descripción</b></TableCell>
                <TableCell><b>Fecha creacion</b></TableCell>
                <TableCell align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {data && data.map((elem) => (

                <TableRow key={elem.id}>
                  <TableCell
                    sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.name}
                  </TableCell>
                  <TableCell
                    sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.description}
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
              ))}
              {error ? 'Error al traer Novedades' : null}
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
        setElementToDelete={setElementToDelete}
        setDeletedSuccess={setDeletedSuccess}
      />
    </>
  )
}

Categories.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
  })).isRequired,
  handleModal: PropTypes.bool.isRequired,
  setHandleModal: PropTypes.func.isRequired,
  setElementToDelete: PropTypes.func.isRequired,
  elementToDelete: PropTypes.oneOfType([PropTypes.object]).isRequired,
  deleteElement: PropTypes.func.isRequired,
  deletedSuccess: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  setDeletedSuccess: PropTypes.func.isRequired,
}

export default Categories
