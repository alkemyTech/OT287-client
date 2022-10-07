import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DB5752',
    },
    secondary: {
      main: '#0038FF',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    button: {
      textTransform: 'capitalize',
    },
  },
  shape: {
    color: 'FF0000',
    borderRadius: 5,
    height: 80,
  },
  zIndex: {
    modal: 1600,
  },
});

export default theme;
