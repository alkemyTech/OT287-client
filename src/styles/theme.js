import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(255, 0, 0, 1)',
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
