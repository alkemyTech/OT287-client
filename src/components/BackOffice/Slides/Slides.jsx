import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer,
  TableCell, TableBody, Paper, Typography,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import DeleteModal from '../../Layout/DeleteModal'

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

const Slides = (
  props,
) => {

  const {
    slides, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSuccess, errorStatus, errorStatusSlides, setDeletedSuccess,
  } = props

  return (
    <>
  <Box sx={{ padding: { xs: '10px'} }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginY: { lg: '40px', xs: '10px' }, fontWeight: 'bold' }}
        >
          Lista de Slides
        </Typography>
        <TableContainer

          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgb(240,240,240)' }}>
                <TableCell sx={{lineHeight:'1'}}><b>Imagen</b></TableCell>
                <TableCell sx={{lineHeight:'1'}}><b>Texto</b></TableCell>
                <TableCell sx={{lineHeight:'1'}}><b>Orden</b></TableCell>
                <TableCell sx={{lineHeight:'1'}}><b>Organizacion</b></TableCell>
                <TableCell sx={{lineHeight:'1'}} align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {slides && slides.map((elem) => (

                <TableRow key={elem.id}>
                  <TableCell
                    align="center"
                    sx={{
                      margin: '1px', padding: '0', width: '20%',
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
                      src={isImage(elem.imageUrl) || elem.imageUrl.length > 10 ? `/images/${elem.imageUrl}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH2cSl_mcI1heNKNhcs7Qpg0OVCh8AsiD5A&usqp=CAU'}
                      alt="news image"
                    />
                  </TableCell>
                  <TableCell
                  sx={{ width: '20%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.text}
                  </TableCell>
                  <TableCell
                  sx={{ width: '20%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.order}

                  </TableCell>
                  <TableCell
                  sx={{ width: '20%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.organization.name}

                  </TableCell>
                  <TableCell sx={{ padding: '0', width: '20%' }} align="center">
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

                        <HighlightOffIcon sx={{
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
               {errorStatusSlides ? 'Error al traer Slides' : null}
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

Slides.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    text:PropTypes.string,
    order: PropTypes.string,
    organizationId: PropTypes.string,
  })).isRequired,
}
export default Slides
