import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer,
  TableCell, TableBody, Paper, Typography,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import EditIcon from '@mui/icons-material/Edit'
import { useNavigate } from 'react-router-dom'
import TestimonialDeleteModal from '../../Layout/DeleteModal'

const Testimonials = (
  props,
) => {
  const {
    testimonials, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSuccess, errorStatus, getTestimonialsData, errorStatusTestimonials,
    setDeletedSuccess,
  } = props
  const navigate = useNavigate()
  return (
    <>
      <Box sx={{ mx: { xs: 2.5, md: 0 } }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ my: { lg: '1rem', xs: '0.63rem' }, fontWeight: 'bold' }}
        >
          Lista de Testimonios
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
        deletedSuccess={deletedSuccess}
        errorStatus={errorStatus}
        getTestimonialsData={getTestimonialsData}
        setElementToDelete={setElementToDelete}
        setDeletedSuccess={setDeletedSuccess}
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
  deletedSuccess: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string.isRequired,
  getTestimonialsData: PropTypes.func.isRequired,
  errorStatusTestimonials: PropTypes.string.isRequired,
  setDeletedSuccess: PropTypes.func.isRequired,
}
export default Testimonials
