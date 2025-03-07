import { Box, Typography } from "@mui/material";

import DNA from "@/assets/icons/DNA";
const DNALoader = () => {
  return (
    <Box 
      sx={{
        display:"flex", 
        flexDirection:"column",
        justifyContent:"center", 
        alignItems:"center", 
        height:"50vh"
    }}>
      <DNA size={200}/>
      <Typography>Analyzing. Please wait ...</Typography>
    </Box>
  )
}

export default DNALoader;
