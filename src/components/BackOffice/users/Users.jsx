import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer, TableCell, TableBody, Paper,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

const Users = ({ users }) => (
  <Box>

    <TableContainer sx={{ position: 'absolute', top: '80px', width: { lg: '85%', xs: '100%' } }} component={Paper}>
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
              <TableCell sx={{ color: 'yellow' }}><EditIcon /></TableCell>
              <TableCell sx={{ color: 'red' }}><HighlightOffIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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