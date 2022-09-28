/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const DrawerOptions = ({ options, filter, activeSection }) => (
  <Box sx={{ mt: { sm: 3 } }}>
    <Toolbar />
    <List>
      {options.map((el) => (
        <Link style={{ color: 'inherit', textDecoration: 'none' }} to={el.route}>
          <ListItem key={el.text} disablePadding onClick={() => filter(el.text)} sx={{ backgroundColor: activeSection === el.text ? '#ebebeb' : '' }}>
                <ListItemButton>
            <ListItemIcon>
              {el.icon}
            </ListItemIcon>
            <ListItemText primary={el.text} sx={{ textTransform: 'capitalize' }} />
                </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  </Box>
)

DrawerOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.element,
  })).isRequired,
  filter: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
}

export default DrawerOptions;
