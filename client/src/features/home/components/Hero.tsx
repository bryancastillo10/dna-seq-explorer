import { Box, Stack, Typography } from "@mui/material";

const Hero = () => {
    const pageDescription =`DNASeq Explorer is a simple web application designed to help life science enthusiasts to explore & 
          analyzing biological sequences. Whether you're a student just starting to learn about molecular biology 
          or a researcher looking for quick and seamless tool, this app offers you some features
          assisting on common DNA Analysis tasks.`
    return (
        <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            alignItems={{ xs: "center", md: "column" }}
        >
        <Box 
            sx={{ backgroundColor: "teal" }} 
            width={{xs:"100%", md:"50%"}} 
            height="500px"
        >
            <Typography variant="body1">
                {pageDescription}
            </Typography>
        </Box>
       <Box 
        sx={{ backgroundColor:"dodgerblue" }} width={{xs:"100%", md:"50%"}} height="500px"></Box>
    </Stack>
  )
}

export default Hero;
