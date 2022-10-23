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
      {options.map((elem) => (
        <Link style={{ color: 'inherit', textDecoration: 'none' }} to={elem.route !== 'profile' ? `/back-office/${elem.route}` : '/mi-perfil'} key={elem.id}>
          <ListItem disablePadding onClick={() => filter(elem)} sx={{ backgroundColor: activeSection && activeSection.includes(elem.route) ? '#ebebeb' : null }}>
                <ListItemButton>
            <ListItemIcon>
              {elem.icon}
            </ListItemIcon>
            <ListItemText primary={elem.text} sx={{ textTransform: 'capitalize' }} />
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
  activeSection: PropTypes.string,
}

DrawerOptions.defaultProps = {
  activeSection: null,
}

export default DrawerOptions;
