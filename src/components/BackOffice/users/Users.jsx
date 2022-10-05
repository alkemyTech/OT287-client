import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer,
  TableCell, TableBody, Paper, Typography, IconButton,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const Users = ({ users }) => {
  const navigate = useNavigate()
  return (

    <Box>
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginY: { lg: '40px', xs: '10px' }, fontWeight: 'bold' }}
        >
          Lista de Actividades
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
                  <TableCell>{elem.id}</TableCell>
                  <TableCell>{elem.firstName}</TableCell>
                  <TableCell>{elem.lastName}</TableCell>
                  <TableCell>{elem.email}</TableCell>
                  <TableCell sx={{ padding: '0', width: '60px' }} align="center">
                    <>
                    <IconButton onClick={() => {
                        navigate(`/back-office/users/${elem.id}`) 
                      }}
                      >
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
                      </IconButton>

                      <IconButton onClick={() => {
                       
                      }}
                      >
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
                        />
                      </IconButton>
                    </>
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    // <Box>
    //   <TableContainer sx={{ position: 'absolute', top: '80px', width: { lg: '85%', xs: '100%' } }} component={Paper}>
    //     <Table>
    //       <TableHead>
    //         <TableRow>
              // <TableCell>Id</TableCell>
              // <TableCell>Nombre</TableCell>
              // <TableCell>Apellido</TableCell>
              // <TableCell>Email</TableCell>
              // <TableCell>Editar</TableCell>
    //           <TableCell>Eliminar</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {users.map((user) => (

    //           <TableRow key={user.id}>
    //             <TableCell>{user.id}</TableCell>
    //             <TableCell>{user.firstName}</TableCell>
    //             <TableCell>{user.lastName}</TableCell>
    //             <TableCell>{user.email}</TableCell>
    //             <TableCell sx={{ color: 'yellow' }}><EditIcon onClick={() => { navigate(`/back-office/users/${user.id}`) }} /></TableCell>
    //             <TableCell sx={{ color: 'red' }}><HighlightOffIcon /></TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Box>

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
