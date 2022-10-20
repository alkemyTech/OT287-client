import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Table, TableRow, TableHead, TableContainer,
  TableCell, TableBody, Paper, Typography,
} from '@mui/material'
// eslint-disable-next-line no-unused-vars
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import DeleteModal from '../../Layout/DeleteModal'

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

const Organization = (
  props,
) => {
  const {
    organization, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSuccess, errorStatus, errorStatusOrganization, setDeletedSuccess,
  } = props

  return (
    <>
      <Box sx={{ padding: { xs: '10px' } }}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginY: { lg: '40px', xs: '10px' }, fontWeight: 'bold' }}
        >
          Organizacion
        </Typography>
        <TableContainer
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgb(240,240,240)' }}>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Imagen</b></TableCell>
                <TableCell><b>Texto Bienvenida</b></TableCell>
                <TableCell><b>Texto Sobre Nosotros</b></TableCell>
                <TableCell><b>Domicilio</b></TableCell>
                <TableCell><b>Telefono</b></TableCell>
                <TableCell><b>email</b></TableCell>
                <TableCell><b>Facebook</b></TableCell>
                <TableCell><b>Instagram</b></TableCell>
                <TableCell><b>Linkedin</b></TableCell>

                <TableCell align="center"><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {organization && organization.map((elem) => (

                <TableRow key={elem.id}>
                  <TableCell
                    sx={{ width: '9,09%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.name}

                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      margin: '1px', padding: '0', width: '9,09%',
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        margin: '3px auto',
                        height: '60px',
                        width: '60px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                      src={isImage(elem.image) || elem.image.length > 10 ? elem.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKH2cSl_mcI1heNKNhcs7Qpg0OVCh8AsiD5A&usqp=CAU'}
                      alt="news image"
                    />
                  </TableCell>
                  <TableCell
                    sx={{ width: '20%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {`${elem.welcomeText.substring(0, 15)}...`}
                  </TableCell>
                  <TableCell
                    sx={{ width: '15%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {`${elem.aboutUsText.substring(0, 15)}...`}
                  </TableCell>
                  <TableCell
                    sx={{ width: '10%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {`${elem.address.substring(0, 15)}...`}
                  </TableCell>
                  <TableCell
                    sx={{ width: '10%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.phone}

                  </TableCell>
                  <TableCell
                    sx={{ width: '10%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.email}

                  </TableCell>
                  <TableCell
                    sx={{ width: '5%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.fbUrl.split('/').pop()}

                  </TableCell>
                  <TableCell
                    sx={{ width: '5%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.igUrl.split('/').pop()}

                  </TableCell>
                  <TableCell
                    sx={{ width: '5%', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {elem.ldUrl.split('/').pop()}

                  </TableCell>
                  <TableCell sx={{ padding: '0', width: '10%' }} align="center">
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
                      {/* No se deberia poder borrar la info de la Organizacion */}

                      {/* <HighlightOffIcon
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
                      /> */}

                    </>
                  </TableCell>
                </TableRow>
              )) }
              {errorStatusOrganization ? 'Error al traer Organizaciones' : null}
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

Organization.propTypes = {
  organization: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    fbUrl: PropTypes.string,
    igUrl: PropTypes.string,
    ldUrl: PropTypes.string,
    welcomeText: PropTypes.string,
    aboutUsText: PropTypes.string,
  })).isRequired,
  handleModal: PropTypes.bool.isRequired,
  setHandleModal: PropTypes.func.isRequired,
  setElementToDelete: PropTypes.func.isRequired,
  elementToDelete: PropTypes.oneOfType([PropTypes.object]).isRequired,
  deleteElement: PropTypes.func.isRequired,
  deletedSuccess: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string.isRequired,
  errorStatusOrganization: PropTypes.string.isRequired,
  setDeletedSuccess: PropTypes.func.isRequired,
}
export default Organization
