import { Stack, Typography, Box, Card, CardContent } from "@mui/material";
import { cardContainerStyle, cardHeaderStyle } from "@/features/home/style/appGuide";
import { Search } from "lucide-react";

const AppGuide = () => {

    
    
  return (
      <Stack>
        <Typography variant="h3">How to Get Started?</Typography>
        <Box sx={cardContainerStyle}>
            <Card>
                <Box sx={cardHeaderStyle}>
                    <Search size={48}/>
                    <Typography variant="h3">Search</Typography>
                </Box> 
                <CardContent>
                    <Typography variant="body1" textAlign="center">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, soluta.
                          Placeat, et pariatur esse architecto dicta alias doloribus facilis culpa.
                    </Typography>
                </CardContent>
            </Card>    
              
            <Card>
                <Box sx={cardHeaderStyle}>
                    <Search size={48}/>
                    <Typography variant="h3">Search</Typography>
                </Box> 
                <CardContent>
                    <Typography variant="body1" textAlign="center">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, soluta.
                          Placeat, et pariatur esse architecto dicta alias doloribus facilis culpa.
                    </Typography>
                </CardContent>
            </Card>      

              
            <Card>
                <Box sx={cardHeaderStyle}>
                    <Search size={48}/>
                    <Typography variant="h3">Search</Typography>
                </Box> 
                <CardContent>
                    <Typography variant="body1" textAlign="center">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, soluta.
                          Placeat, et pariatur esse architecto dicta alias doloribus facilis culpa.
                    </Typography>
                </CardContent>
            </Card>      
        </Box>
      </Stack>
  )
}

export default AppGuide;
