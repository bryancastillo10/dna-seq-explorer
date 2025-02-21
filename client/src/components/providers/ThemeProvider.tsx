import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/style/theme";


const ThemeProvider = ({children}:{children: React.ReactNode}) => {
  return (
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
  )
}

export default ThemeProvider;
