import { createTheme } from '@mui/material/styles';
import roboto from '@/src/font';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#DBA39A',
    },
    secondary: {
      main: '#F0DBDB',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
