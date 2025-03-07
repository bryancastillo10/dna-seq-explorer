import { Box, Typography } from "@mui/material";

interface OutputBlockProps {
	children: React.ReactNode;
}

const OutputBlock = ({children}: OutputBlockProps) => {
  return (
    <Box
          sx={{
            display: "flex",
            flexDirection:"column",   
            width: {xs:"100%", md:"50%"},
            gap: 2,
            marginBottom:4
          }}
      >
        <Typography variant="h3" textAlign="center">Analysis Result</Typography>
		{children}
	</Box>
  )
}

export default OutputBlock
