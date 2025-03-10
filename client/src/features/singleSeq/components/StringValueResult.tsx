import { Box, Typography } from "@mui/material";

interface StringValueResultProps {
	title: string;
	result: string;
}

const StringValueResult = ({title, result}: StringValueResultProps) => {
  return (
	<Box sx={{ display:"flex", alignItems:"center", gap: 2, marginBottom: 2 }}>
		<Typography variant="h6">{title}</Typography>
		<Typography>{result}</Typography>
	</Box>
  )
}

export default StringValueResult;
