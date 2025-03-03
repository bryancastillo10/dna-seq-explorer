import { Drawer, Box, Typography, Stack, Link, useTheme } from "@mui/material";
import { navitems } from "@/constants/navItems";
interface SidebarProps {
    openMenu: boolean;
    toggleDrawer: () => void;
}

const Sidebar = ({ openMenu, toggleDrawer }: SidebarProps) => {
    const theme = useTheme();
    
    const drawerLayout = {
        width: { sm: "400px", xl: "500px" },
        height: "100vh",
        px: 6,
        py: 3,
        backgroundColor: theme.palette.secondary.main,
    };
    
    const linkStyles = {
        textDecoration: "none",
        position: "relative",
        display: "inline-block",
        width:"fit-content",
        color: theme.palette.primary.dark,
        "&:after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            width:"0%",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            transition: "width 0.5s ease-in-out",
        },
        "&:hover": {
            color: theme.palette.primary.main,
        },
        "&:hover:after": {
            width:"100%"
        },
    };
    
    return (
     <Drawer
      anchor="right"
      open={openMenu}
      onClose={toggleDrawer}
    >
      <Box
        sx={drawerLayout}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
            >
     <Typography align="center" variant="h5" sx={{marginBottom: 4}}>Explore the App</Typography>
      <Stack spacing={4}> 
        {navitems.map((nav) => {
            const Icon = nav.icon;
            return (
                <Link
                    key={nav.id}
                    href={nav.link}
                    sx={linkStyles}
                    underline="none"
                >
                    <Stack direction="row" spacing={2}>
                        <Box component="div"><Icon/></Box>
                        <Typography>{nav.name}</Typography>
                    </Stack>
                </Link>
            )
        })}
        </Stack>
      </Box>
    </Drawer>
    )
}

export default Sidebar;


