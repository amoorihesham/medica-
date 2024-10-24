'use client';

import { createTheme, responsiveFontSizes } from '@mui/material';

let themeConfig = createTheme({
  palette: {
    primary: {
      main: '#164B60',
    },
    secondary: {
      main: '#A2FD85',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'drugStore' },
          style: {
            width: '100%',
            borderRadius: '24px',
            height: '150px',
            fontWeight: '700',
            fontSize: '36px',
            backgroundColor: '#FC3636',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#e63030',
            },
          },
        },
        {
          props: { variant: 'gomlaStore' },
          style: {
            width: '100%',
            borderRadius: '24px',
            height: '150px',
            fontWeight: '700',
            fontSize: '36px',
            backgroundColor: '#EB882A',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#e0822b',
            },
          },
        },
        {
          props: { variant: 'linkButton' },
          style: {
            borderRadius: '24px',
            fontWeight: '700',
            color: '#164B60',
            textTransform: 'capitalize',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: 'Lato',
    htmlFontSize: 14,
    h1: {
      fontSize: '26px',
    },
    h2: {
      fontSize: '24px',
    },
    h3: { fontSize: '22px' },
    h4: { fontSize: '20px' },
    h5: { fontSize: '18px' },
    h6: { fontSize: '16px' },
    body1: { fontSize: '16px' },
    body2: { fontSize: '14px' },
    subtitle1: { fontSize: '14px', fontWeight: 300 },
    subtitle2: { fontSize: '12px', fontWeight: 100 },
    secHeading: { fontSize: '26px' },
  },
});
themeConfig = responsiveFontSizes(themeConfig);
export default themeConfig;
