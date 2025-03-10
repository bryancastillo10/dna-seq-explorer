import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

interface IntValueResultProps {
	title: string;
	result: number;
	withUnit?: boolean;
	unit?: " Da" | " %";
};

const IntValueResult = ({
	title, 
	result,
	withUnit = false,
	unit = " %"
}: IntValueResultProps) => {

  const theme = useTheme();
  return (
	<Box sx={{ display:"flex", alignItems:"center", gap: 2, my: 2 }}>
		<Typography variant="h6">{title}</Typography>
		<Typography 
			variant="h5"
			sx={{
				backgroundColor: theme.palette.primary.main, 
				color: theme.palette.primary.contrastText,
				px: 1.5, py: 0.75,
				borderRadius: "16px"
			}}
		>
			{result}
			{withUnit && (unit)}
		</Typography>
	</Box>
  )
};

export default IntValueResult;
