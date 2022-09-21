import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(255, 0, 0, 1)',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  shape: {
    borderRadius: 20,
  },
});

export default theme;
