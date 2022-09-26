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
    borderRadius: 20,
  },
});

export default theme;
