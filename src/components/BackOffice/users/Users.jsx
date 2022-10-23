import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {
  Box, Table, TableRow, TableHead, TableContainer,
  TableCell, TableBody, Paper, Typography,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModal from '../../Layout/DeleteModal'

const Users = (
  props,
) => {
  const {
    users, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSuccess, errorStatus, errorStatusUsers,
    setDeletedSuccess,
  } = props

  return (
    <>
      <Box>
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginY: { lg: '40px', xs: '10px' }, fontWeight: 'bold' }}
        >
          Lista de Usuarios
        </Typography>
        <TableContainer
          sx={{
            width: { lg: '80%', xs: '100%' },
          }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgb(240,240,240)' }}>
                <TableCell align="center"><b>Id</b></TableCell>
                <TableCell align="center"><b>Imagen</b></TableCell>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Apellido</b></TableCell>
                <TableCell><b>Email</b></TableCell>
                <TableCell align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((elem) => (
                <TableRow key={elem.id}>
                  <TableCell
                    align="center"
                    sx={{ width: '5%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.id}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      margin: '1px', padding: '0', width: '10%',
                    }}
                  >
                    <Box
                      component="img"
                      align="center"
                      sx={{
                        margin: '3px auto',
                        height: '60px',
                        width: '60px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                      src={elem.image}
                      alt="user image"
                    />
                  </TableCell>

                  <TableCell
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.firstName}
                  </TableCell>
                  <TableCell
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.lastName}
                  </TableCell>
                  <TableCell
                    sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.email}
                  </TableCell>
                  <TableCell sx={{ width: '10%', padding: '0' }} align="center">
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
              {errorStatusUsers ? 'Error al traer Usuarios' : null}
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
Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
  handleModal: PropTypes.bool.isRequired,
  setHandleModal: PropTypes.func.isRequired,
  setElementToDelete: PropTypes.func.isRequired,
  elementToDelete: PropTypes.oneOfType([PropTypes.object]),
  deleteElement: PropTypes.func.isRequired,
  deletedSuccess: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string,
  errorStatusUsers: PropTypes.string.isRequired,
  setDeletedSuccess: PropTypes.func.isRequired,
}

Users.defaultProps = {
  elementToDelete: null,
  errorStatus: null,
}

export default Users
