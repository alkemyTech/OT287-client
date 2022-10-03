import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, IconButton, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Typography,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Contacts = (props) => {
  const { contacts, errorStatus } = props
  return (
    <>
      <Box>
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginY: { lg: '40px', xs: '10px' }, fontWeight: 'bold' }}
        >
          Lista de Contactos
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
            <TableHead sx={{ backgroundColor: 'rgb(240,240,240)' }}>
              <TableRow>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Email</b></TableCell>
                <TableCell sx={{ minWidth: '750px' }}><b>Mensaje</b></TableCell>
                <TableCell align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {contacts && contacts.map((elem) => (

                <TableRow key={elem.id}>
                  <TableCell>{elem.name}</TableCell>
                  <TableCell
                    sx={{ width: '30px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.email}

                  </TableCell>
                  <TableCell
                    sx={{ width: '220px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.message}

                  </TableCell>
                  <TableCell sx={{ padding: '0', width: '60px' }} align="center">
                    <>
                      <IconButton>
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
              {errorStatus ? 'Error al traer Contactos' : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
  errorStatus: PropTypes.string.isRequired,
}

export default Contacts
