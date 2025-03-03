import { useState } from "react";
import {
  AppBar,
  Container,
  Typography,
  IconButton,
  Box,
  Toolbar,
  useTheme
} from "@mui/material";
import { Menu } from "lucide-react";

import Sidebar from "@/components/navigations/Sidebar";

import AppLogo from "@/assets/images/base-dna.png";
import NavMenuList from "./NavMenuList";
import useResponsiveQuery from "@/utils/useResponsiveQuery";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  
  const theme = useTheme();
  const isDesktop = useResponsiveQuery("lg");

  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBar position="sticky" sx={{top: "0"}}>
      <Container maxWidth="lg">
        <Toolbar sx={{p: 2}} disableGutters>
          <Box
            component="img"
            src={AppLogo}
            alt="App Logo"
            sx={{ width: 50, height: 50, mr: 2}}
          />
          <Typography
            variant="h3"
            sx={{ flexGrow: 1 }}>
            DNA Seq Explorer
          </Typography>
         {isDesktop ?  (
            <NavMenuList theme={theme}/> 
          ): (
            <>
              <IconButton onClick={toggleDrawer}>
                <Menu size={26} color={theme.palette.primary.contrastText}/>
              </IconButton>
              <Sidebar openMenu={openMenu} toggleDrawer={toggleDrawer} />
            </>
          ) }
        </Toolbar>
      </Container>        
    </AppBar>
  );
}

export default Navbar;