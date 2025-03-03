import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  // Colors
  palette: {
    background: {
        default: "#FFECD1"    
    },
    primary: {
      light: '#33AB9F',
      main: '#009688',
      dark: '#001524',
      contrastText: '#F4F3F2',
    },
    secondary: {
      light: '#FFE1C6',
      main: '#FFECD1',
      dark: '#8D818C',
      contrastText: '#001524',
    },
  },

  // Font Styles, Font Size, Font Weight
  typography: {
      fontFamily: ["Poppins","Nova Square", "sans-serif"].join(','),
      fontSize: 14,
      h1: {
        fontSize: "2rem",
        fontWeight: 700   
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 600  
      },
      h3: {
        fontSize: "1.55rem",
        fontWeight: 500,
        fontFamily: "Nova Square"
      }
    }
});
