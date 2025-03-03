import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/constants/theme";


const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

export default Providers;
