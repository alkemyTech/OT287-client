import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer, TableCell, TableBody, Paper, Typography,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

const Users = ({ news }) => (
  <Box>
    <Typography component="h1" variant="h5" sx={{ marginY: { lg: '40px', xs: '10px' }, fontWeight: 'bold' }}>Lista de Novedades</Typography>
    <TableContainer
      sx={{
        position: 'absolute', top: '180px', height: '400px', overflow: 'auto', width: { lg: '80%', xs: '100%' },
      }}
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'rgb(240,240,240)' }}>
            <TableCell><b>Nombre</b></TableCell>
            <TableCell><b>URL Imagen</b></TableCell>
            <TableCell><b>Fecha creacion</b></TableCell>
            <TableCell align="center"><b>Acciones</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news.map((elem) => (

            <TableRow key={elem.id}>
              <TableCell>{elem.name}</TableCell>
              <TableCell sx={{ width: '30px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{elem.image}</TableCell>
              <TableCell sx={{ width: '220px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{elem.createdAt}</TableCell>
              <TableCell sx={{ padding: '0', width: '60px' }} align="center">
                <>
                  <EditIcon sx={{
                    opacity: '0.5', padding: '1px', border: '1px solid red', borderRadius: '5px', backgroundColor: 'white', color: 'red', fontSize: '1.8rem', margin: '0 5px', cursor: 'pointer', '&:hover': { opacity: '1' },
                  }}
                  />
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
                </>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>

)
Users.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.string,
  })).isRequired,
}
export default Users
