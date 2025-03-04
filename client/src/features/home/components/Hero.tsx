import { Box, Stack, Typography } from "@mui/material";
import Researcher from "@/assets/images/researcher.png";

import { heroCaptionStyle, heroMediaStyle, heroTextAlignment } from "@/features/home/style/hero";
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
        <Box sx={heroCaptionStyle}>
            <Typography variant="h3" sx={{ my: 4 , textAlign:{heroTextAlignment}}} >
                Simplified Tool for Biological Sequences
            </Typography>  
            <Typography variant="body1" sx={{ my: 4 , textAlign:{heroTextAlignment}}}>
                {pageDescription}
            </Typography>
        </Box>
        <Box sx={heroMediaStyle}>
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
