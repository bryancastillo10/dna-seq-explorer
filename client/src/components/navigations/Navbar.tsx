import { useState } from "react";
import {
  AppBar,
  Container,
  Typography,
  IconButton,
  Box,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Menu } from "lucide-react";

import Sidebar from "@/components/navigations/Sidebar";

import AppLogo from "@/assets/base-dna.png";
import NavMenuList from "./NavMenuList";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{margin: 2}} disableGutters>
          <Box
            component="img"
            src={AppLogo}
            alt="App Logo"
            sx={{ width: 50, height: 50, mr: 2}}
          />
          <Typography
            variant="h3"
            sx={{ flexGrow: 1, fontFamily: "Poppins" }}>
            DNA Seq Explorer
          </Typography>
         {isSmallScreen ? (
            <>
              <IconButton onClick={toggleDrawer}>
                <Menu size={26} color={theme.palette.primary.contrastText}/>
              </IconButton>
              <Sidebar openMenu={openMenu} toggleDrawer={toggleDrawer} />
            </>
          ) : (
            <NavMenuList theme={theme}/>
          )}
        </Toolbar>
      </Container>
      
    </AppBar>
  );
}

export default Navbar;