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
    const {users, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSucces, errorStatus, errorStatusUsers,
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
          Lista de Usuarios
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
                 <TableCell>Id</TableCell>
                 <TableCell>Nombre</TableCell>
                 <TableCell>Apellido</TableCell>
                 <TableCell>Email</TableCell>
                 <TableCell align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((elem) => (
                <TableRow key={elem.id}>
                  <TableCell
                  sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >{elem.id}
                  </TableCell>
                  <TableCell
                  sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >{elem.firstName}
                  </TableCell>
                  <TableCell
                  sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >{elem.lastName}
                  </TableCell>
                  <TableCell
                  sx={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >{elem.email}
                  </TableCell>
                  <TableCell sx={{width: '25%', padding: '0'}} align="center">
                    <>
                    <Link to={`${elem.id}/editar`}>
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
       deletedSucces={deletedSucces}
       errorStatus={errorStatus}
       setElementToDelete={setElementToDelete}
       setDeletedSucces={setDeletedSucces}
     />
     </>
  )
}
Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
}

export default Users
