import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer,
  TableCell, TableBody, Paper, Typography,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import TestimonialDeleteModal from './TestimonialDeleteModal';

const Testimonials = (
  props,
) => {
  const {
    testimonials, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSucces, errorStatus, getTestimonialsData, errorStatusTestimonials,
    setDeletedSucces,
  } = props
  const navigate = useNavigate()
  return (
    <>
      <Box>
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginY: { lg: '2.5rem', xs: '0.63rem' }, fontWeight: 'bold' }}
        >
          Lista de Testimonios
        </Typography>
        <TableContainer
          sx={{
            position: 'absolute',
            top: '11.25rem',
            height: '25rem',
            overflow: 'auto',
            width: { lg: '80%', xs: '100%' },
          }}
          component={Paper}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Testimonio</b></TableCell>
                <TableCell align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {testimonials && testimonials.map((elem) => (

                <TableRow key={elem.id}>
                  <TableCell
                    sx={{ width: '15%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.name}

                  </TableCell>
                  <TableCell
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.content}

                  </TableCell>
                  <TableCell sx={{ padding: '0', width: '3.75rem' }} align="center">
                    <>
                      <EditIcon
                        sx={{
                          opacity: '0.5',
                          padding: '1px',
                          border: '1px solid red',
                          borderRadius: '0.31rem',
                          backgroundColor: 'white',
                          color: 'red',
                          fontSize: '1.8rem',
                          margin: '0 0.31rem',
                          cursor: 'pointer',
                          '&:hover': { opacity: '1' },
                        }}
                        onClick={() => { navigate(`/back-office/testimonials/${elem.id}/edit`) }}
                      />

                      <HighlightOffIcon
                        sx={{
                          opacity: '0.5',
                          padding: '1px',
                          borderRadius: '0.31rem',
                          backgroundColor: 'red',
                          color: 'white',
                          fontSize: '1.8rem',
                          margin: '0 0.31rem',
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
              {errorStatusTestimonials ? 'Error al traer Testimonios' : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <TestimonialDeleteModal
        openModal={handleModal}
        setHandleModal={setHandleModal}
        elementToDelete={elementToDelete}
        deleteElement={deleteElement}
        deletedSucces={deletedSucces}
        errorStatus={errorStatus}
        getTestimonialsData={getTestimonialsData}
        setElementToDelete={setElementToDelete}
        setDeletedSucces={setDeletedSucces}
      />
    </>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  handleModal: PropTypes.bool.isRequired,
  setHandleModal: PropTypes.func.isRequired,
  setElementToDelete: PropTypes.func.isRequired,
  elementToDelete: PropTypes.oneOfType([PropTypes.object]).isRequired,
  deleteElement: PropTypes.func.isRequired,
  deletedSucces: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string.isRequired,
  getTestimonialsData: PropTypes.func.isRequired,
  errorStatusTestimonials: PropTypes.string.isRequired,
  setDeletedSucces: PropTypes.func.isRequired,
}
export default Testimonials
