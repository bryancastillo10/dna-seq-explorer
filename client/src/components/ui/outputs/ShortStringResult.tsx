import { Box, Typography } from "@mui/material";

interface ShortStringValueResultProps {
	title: string;
	result: string;
}

const ShortStringResult = ({title, result}: ShortStringValueResultProps) => {
  return (
	<Box sx={{ display:"flex", alignItems:"center", gap: 2, marginBottom: 2 }}>
		<Typography variant="h6">{title}</Typography>
		<Typography>{result}</Typography>
	</Box>
  )
}

export default ShortStringResult;
