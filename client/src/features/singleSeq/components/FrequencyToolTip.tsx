import type { TooltipProps } from "recharts";
import { Box, Typography } from "@mui/material";

const FrequencyTooltip = ({ active, payload, label }: TooltipProps<any,any>) => {
  if (active && payload && payload.length) {

    const count = Number(payload[0]?.value);
    const formatCount = Number.isInteger(count) ? count : count.toFixed(4);

    return (
      <Box sx={{ 
        backgroundColor: "#FFE1C6", 
        border: "1px solid #ccc", 
        borderRadius: "8px",
        p: 1 }}>
        <Typography variant="body2">{`${label}`}</Typography>
        <Typography variant="body2">{`Count: ${formatCount}`}</Typography>
      </Box>
    );
  }
  return null;
};

export default FrequencyTooltip;