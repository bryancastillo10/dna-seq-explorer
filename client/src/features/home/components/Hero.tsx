import { Box, Stack, Typography } from "@mui/material";
import Researcher from "@/assets/images/researcher.png";

const Hero = () => {
    const pageDescription = `DNASeq Explorer helps life science enthusiasts explore and 
        analyze biological sequences quickly. Whether you're a student or researcher, this 
        tool streamlines common DNA analysis tasks.`
        
    return (
        <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            justifyContent={{xs:"center", md:"space-between"}}
            alignItems={{xs:"center", md:"start"}}
        >
        <Box 
            sx={{
                width:{ xs: "100%", md: "70%" },
                display: "flex",
                flexDirection:"column",
                alignItems:{xs:"center", md:"start"}
            }}
        >
            <Typography variant="h3" sx={{ my: 4 }} textAlign={{ xs: "center", md: "left" }}>
                Simplified Tool for Biological Sequences
            </Typography>  
            <Typography variant="body1" sx={{ mb: 6 }} textAlign={{ xs: "center", md: "left" }}>
                {pageDescription}
            </Typography>
        </Box>
        <Box 
            sx={{
                width:{ xs: "100%", md: "50%" },
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" }
            }}
            >
            <Box 
                component="img"
                src={Researcher}
                sx={{ width: 400, height: 400 }}
                >
            </Box>
        </Box>
    </Stack>
  )
}

export default Hero;
