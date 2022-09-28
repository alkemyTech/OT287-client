import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer, TableCell, TableBody, Paper, Button,
} from '@mui/material'
import { Link } from 'react-router-dom';

const Users = ({ users }) => (
  <Box>

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((elem) => (

            <TableRow key={elem.id}>
              <TableCell>{elem.id}</TableCell>
              <TableCell>{elem.nombre}</TableCell>
              <TableCell>{elem.apellido}</TableCell>
              <TableCell>{elem.email}</TableCell>
              <TableCell>editar</TableCell>
              <TableCell sx={{ color: 'red' }}>eliminar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Link to="/backoffice">
      <Button variant="outlined" sx={{ left: { lg: '120px', xs: '80px' } }}>Volver al panel de administrador</Button>
    </Link>
  </Box>

)
Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
}
export default Users
