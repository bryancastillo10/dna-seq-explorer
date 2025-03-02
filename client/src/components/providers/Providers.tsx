import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
        main: teal[500]
    }
  }
});

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Providers;
