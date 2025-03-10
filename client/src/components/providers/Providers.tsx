import { ThemeProvider, CssBaseline } from "@mui/material";
import { ToastProvider } from "@/context/ToastProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@/constants/theme";


const Providers = ({children}:{children:React.ReactNode}) => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <CssBaseline/>
          {children}
        </ToastProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default Providers;
