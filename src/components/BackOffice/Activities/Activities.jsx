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

const Activities = (
  props,
) => {

  const {
    activities, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSuccess, errorStatus, errorStatusActivities, setDeletedSuccess,
  } = props

  return (
    <>
  <Box sx={{ padding: { xs: '10px'} }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginY: { lg: '40px', xs: '10px' }, fontWeight: 'bold' }}
        >
          Lista de Actividades
        </Typography>
        <TableContainer

          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgb(240,240,240)' }}>
                <TableCell sx={{lineHeight:'1'}}><b>Nombre</b></TableCell>
                <TableCell sx={{lineHeight:'1'}}><b>URL Imagen</b></TableCell>
                <TableCell sx={{lineHeight:'1'}}><b>Contenido</b></TableCell>
                <TableCell sx={{lineHeight:'1'}}><b>Fecha creacion</b></TableCell>
                <TableCell sx={{lineHeight:'1'}} align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {activities && activities.map((elem) => (

                <TableRow key={elem.id}>
                  <TableCell 
                  sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >{elem.name}</TableCell>
                  <TableCell
                  sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.image}
                  </TableCell>
                  <TableCell
                    sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    dangerouslySetInnerHTML={{ __html: elem.content.length < 80 ? elem.content : `${elem.content.substring(0, 80)}...` }}
                  />
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
               {errorStatusActivities ? 'Error al traer Novedades' : null}
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

Activities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
}
export default Activities
