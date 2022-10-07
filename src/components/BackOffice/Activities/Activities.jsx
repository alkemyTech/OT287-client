import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer,
  TableCell, TableBody, Paper, Typography, IconButton,
} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';

const Activities = ({ activities }) => (
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
                  <TableCell>{elem.name}</TableCell>
                  <TableCell
                    
                  >
                    {elem.image}

                  </TableCell>
                  <TableCell
                    
                  >
                    {elem.content}

                  </TableCell>
                  <TableCell
                    
                  >
                    {elem.createdAt}

                  </TableCell>
                  <TableCell sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <>
                      <EditIcon sx={{
                        opacity: '0.5',
                        border: '1px solid red',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        color: 'red',
                        cursor: 'pointer',
                        fontSize: '1.8rem',
                        '&:hover': { opacity: '1' },
                      }}
                      />

                      <IconButton onClick={() => {
                       
                      }}
                      >
                        <HighlightOffIcon sx={{
                          opacity: '0.5',
                          borderRadius: '5px',
                          backgroundColor: 'red',
                          color: 'white',
                          fontSize: '1.8rem',
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

)
Activities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
}
export default Activities
