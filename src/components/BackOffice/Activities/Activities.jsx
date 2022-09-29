import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer, TableCell, TableBody, Paper, Button,
} from '@mui/material'
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

const Activities = ({ activities }) => (
  <Box>

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((el) => (
            <TableRow key={el.id}>
              <TableCell>{el.id}</TableCell>
              <TableCell>{el.name}</TableCell>
              <TableCell sx={{ color: 'yellow' }}><EditIcon /></TableCell>
              <TableCell sx={{ color: 'red' }}><HighlightOffIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Link to="/backoffice">
      <Button variant="outlined" sx={{ left: { lg: '120px', xs: '80px' } }}>Volver</Button>
    </Link>
  </Box>

)
Activities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
}
export default Activities
