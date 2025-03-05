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
      },
    h6: {
      fontSize: "1rem",
      fontWeight: "bold",
      letterSpacing: 1
    }},

  // Component Overrides
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
            width: 320,
            height:500,
            backgroundColor: "#FFE1C6",
            padding: "24px 32px"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.main
          },
        }),
        outlined: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.light
          },
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        filledSuccess: ({theme}) => ({
            backgroundColor: "#6ED6A6",
            color: theme.palette.primary.dark
        }),
        filledError: ({theme}) => ({
            backgroundColor: "#C82525",
            color: theme.palette.primary.contrastText
        }),
        filledWarning: ({}) =>({
            backgroundColor: "#FFED49",
            color: theme.palette.primary.dark
        })
      }
    }
  }
});
