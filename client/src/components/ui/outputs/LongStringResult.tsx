import { Stack, Box, Typography, useTheme } from "@mui/material";

interface LongStringResultProps {
  label: string;
  result: string;
  minHeight?: number;
}

const LongStringResult = ({label, result, minHeight = 60}: LongStringResultProps) => {
  const theme = useTheme();
  return (
    <Stack sx={{display:"flex", flexDirection:"column", gap:1, marginBottom:2 }}>
      <Box>
        <Typography variant="h6">{label}</Typography>
      </Box>
      <Box 
        sx={{ 
          overflowY: "scroll", 
          overflowX: "hidden", 
          minHeight: minHeight,
          p: 0.75,
          wordBreak: "break-word",
          border: `1px solid ${theme.palette.primary.dark}`,
          borderRadius: "14px",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}
      >
        <Typography>
            {result}
        </Typography>
      </Box>
    </Stack>
  );
};

export default LongStringResult;
