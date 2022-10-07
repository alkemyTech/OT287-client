import React from 'react'
import PropTypes from 'prop-types';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const AddButton = ({ handleAction }) => (
  <SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{
      position: 'fixed', bottom: 30, right: 30
    }}
    icon={<SpeedDialIcon />}
    onClick={handleAction}
  />
)

AddButton.propTypes = {
  handleAction: PropTypes.func.isRequired,
}

export default AddButton
