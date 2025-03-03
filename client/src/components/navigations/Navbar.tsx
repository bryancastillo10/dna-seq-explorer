import { useState } from "react";
import { AppBar, Container, Typography, IconButton, Box, Toolbar } from "@mui/material";
import { Menu } from "lucide-react";

import Sidebar from "@/components/navigations/Sidebar";
import AppLogo from "@/assets/base-dna.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  
  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{height: 20}} disableGutters>
          <Box
            component="img"
            src={AppLogo}
            alt="App Logo"
            sx={{ width: 40, height: 50, mr: 2}}
          />
          <Typography
            variant="h3"
            sx={{ flexGrow: 1, fontFamily: "Poppins" }}>
            DNA Seq Explorer
          </Typography>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <Menu size={26} />
          </IconButton>
          <Sidebar
            openMenu={openMenu}
            toggleDrawer={toggleDrawer}
          />
        </Toolbar>
      </Container>
      
    </AppBar>
  );
}
