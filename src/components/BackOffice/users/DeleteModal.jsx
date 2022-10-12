import React from 'react'
import PropTypes from 'prop-types'
import {
  Alert,
  Button, Dialog, DialogActions, DialogTitle,
} from '@mui/material'

const DeleteModal = (props) => {
  const {
    openModal, setHandleModal, elementToDelete, deleteElement,
    deletedSucces, errorStatus, setElementToDelete, setDeletedSucces,
  } = props
  return (
    <>
      <Dialog open={openModal}>

        { deletedSucces === false ? (
          <>
            <DialogTitle>
              Estas seguro de eliminar
              { elementToDelete ? elementToDelete.name : null }
              {' '}
              ?
            </DialogTitle>
            <DialogActions>

              <Button onClick={() => deleteElement(elementToDelete.id)}>Si</Button>

              <Button
                onClick={() => {
                  setHandleModal(false)
                }}
              >
                No
              </Button>

            </DialogActions>

          </>

        ) : null }

        {deletedSucces ? (

          <Alert
            severity="success"
            onClose={() => {
              setHandleModal(false)
              setElementToDelete(null)
              setDeletedSucces(false)
            }}
          >
            {elementToDelete ? elementToDelete.name : null}
            {' '}
            se ha eliminado con éxito
          </Alert>

        ) : null}
        {errorStatus ? (
          <Alert
            severity="error"
            onClose={() => setHandleModal(false)}
          >
            No se pudo eliminar
            {' '}
            {elementToDelete ? elementToDelete.name : null}
            {' '}

          </Alert>
        ) : null }
      </Dialog>
    </>
  )
}

DeleteModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setHandleModal: PropTypes.func.isRequired,
  elementToDelete: PropTypes.oneOfType([PropTypes.object]).isRequired,
  deleteElement: PropTypes.func.isRequired,
  deletedSucces: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string.isRequired,
  setElementToDelete: PropTypes.func.isRequired,
  setDeletedSucces: PropTypes.func.isRequired,

}

export default DeleteModal