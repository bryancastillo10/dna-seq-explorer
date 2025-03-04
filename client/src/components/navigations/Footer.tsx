import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (  
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom:0,
        px:8,
        py: 2,
        mt: "auto",
        width: "100%",
        zIndex: 100,
        textAlign: {sm: "center", md:"left"},
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
    <Container maxWidth="lg" sx={{px: 2}}>
      <Typography variant="body2" color="#F4F3F2">
        © {new Date().getFullYear()} Developed by Bryan C. All Rights Reserved.
        </Typography>
    </Container>
    </Box>
  );
};

export default Footer;
