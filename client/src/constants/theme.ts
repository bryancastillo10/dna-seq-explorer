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
        fontWeight: 700,
        fontFamily: "Nova Square"
      }
    },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
            width: 300,
            height:400,
            backgroundColor: "#FFE1C6",
            padding: "24px 32px"
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: ({theme}) => ({
          width: 50,
          height: 50,
          borderRadius: "50%",
          fontSize: "1.5rem",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          boxShadow: `0 0 0 4px ${theme.palette.primary.light}`,
        })
      }
    }
  }
});
