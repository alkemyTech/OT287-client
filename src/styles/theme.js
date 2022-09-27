import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DB5752',
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
});

export default theme;
