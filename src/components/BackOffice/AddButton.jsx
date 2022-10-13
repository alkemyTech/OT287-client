import React from 'react'
import PropTypes from 'prop-types';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { useLocation, Link } from 'react-router-dom';

const AddButton = ({ handleAction }) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Link to={`${location.pathname}/create`} >
       <SpeedDial
         ariaLabel="SpeedDial basic example"
         sx={{
           position: 'fixed', bottom: 30, right: 30
         }}
         icon={<SpeedDialIcon />}
         onClick={handleAction}
       />
    </Link>
  )
} 
 

AddButton.propTypes = {
  handleAction: PropTypes.func.isRequired,
}

export default AddButton
