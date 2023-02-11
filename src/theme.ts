import { createTheme } from '@mui/material/styles';
import roboto from '@/src/font';

const typography = {
  fontFamily: roboto.style.fontFamily,
  h1: {
    fontSize: '3rem',
    fontWeight: 'medium',
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 'normal',
  },
  h3: {
    fontSize: '2.5rem',
    fontWeight: 'medium',
  },
  h4: {
    fontSize: '2rem',
    fontWeight: 'normal',
  },
  h5: {
    fontSize: '1.75rem',
    fontWeight: 'medium',
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 'normal',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 'normal',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 'normal',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 'normal',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 'normal',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 'normal',
  },
} as const;

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#031B3D',
    },
    secondary: {
      dark: '#ed4b82',
      main: '#f06f9b',
      light: '#F8C8CD',
    },
  },
  typography,
});

export default theme;
