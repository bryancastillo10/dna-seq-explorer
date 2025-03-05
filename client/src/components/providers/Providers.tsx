import { ThemeProvider, CssBaseline } from "@mui/material";
import { ToastProvider } from "@/context/ToastProvider";
import { theme } from "@/constants/theme";


const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <CssBaseline/>
        {children}
      </ToastProvider>
    </ThemeProvider>
  )
}

export default Providers;
