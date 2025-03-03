import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "sticky",
        bottom:0,
        px:8,
        py: 2,
        mt: "auto",
        width:"100%",
        textAlign: {sm: "center", md:"left"},
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Typography variant="body2" color="#F4F3F2">
        © {new Date().getFullYear()} Developed by Bryan C. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
