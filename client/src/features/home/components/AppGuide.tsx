import { Stack, Typography, Box, Card, Badge, CardContent } from "@mui/material";
import { cardContainerStyle, cardHeaderStyle, cardBadgeStyle } from "@/features/home/style/appGuide";

import { appGuideList } from "@/features/home/constants/appGuide";

const AppGuide = () => {  
  return (
      <Stack>
        <Typography variant="h3">How to Get Started?</Typography>
        <Box sx={cardContainerStyle}>
            {appGuideList.map((guide) => {
                const Icon = guide.icon;
                return (
                    <Card key={guide.id}>
                        <Box sx={cardHeaderStyle}>
                              <Badge
                                badgeContent={guide.id}
                                color="primary"
                                sx={cardBadgeStyle}
                                />
                            <Icon size={48}/>
                            <Typography variant="h3">{guide.title}</Typography>
                        </Box> 
                        <CardContent sx={{marginTop: 2}}>
                            <Typography variant="body1" textAlign="center">     
                                {guide.step}  
                            </Typography>
                        </CardContent>
                    </Card>   
                )
            })}                       
        </Box>
      </Stack>
  )
}

export default AppGuide;
