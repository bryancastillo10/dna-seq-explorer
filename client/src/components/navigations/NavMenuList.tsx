import { Stack, Breadcrumbs, Typography, Link as MUILink, type Theme } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { navitems } from "@/constants/navItems";

interface NavMenuListProps {
    theme: Theme;
}

const NavMenuList = ({theme}: NavMenuListProps) => {
  return (
     <Stack direction="row" spacing={2}>
              <Breadcrumbs aria-label="app-menu" separator=" ">
                  {navitems.map((nav) => {
                    const Icon = nav.icon;
                    return (
                       <MUILink
                          underline="hover"
                          key={nav.id}
                            sx={{
                                display: 'flex',
                                flexDirection: "column",
                                alignItems: 'center',
                                gap: 1
                            }}
                          color={theme.palette.primary.contrastText}
                          component={Link}
                          href={nav.link}
                        >
                        <Icon />
                        <Typography sx={{
                          fontSize: "0.7rem",
                          wordBreak: 'break-word',
                          textAlign:"center",
                          maxWidth: 80
                        }} variant="body1">{nav.name}</Typography>
                      </MUILink>
                    )
                  })}
              </Breadcrumbs>
          </Stack>
  )
}

export default NavMenuList;
