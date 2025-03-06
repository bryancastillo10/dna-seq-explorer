import { Box, Typography } from "@mui/material";
import { Microscope } from "lucide-react";

const NullOutput = () => {
  return (
	<Box sx={{border: "1px solid #001524", borderRadius: "16px"}} height={450}>
		<Box sx={{
			display:"flex", 
			flexDirection:"column", 
			justifyContent:"center", 
			alignItems:"center", 

			height: "50vh"}}
		>
			<Typography display="flex" alignItems="center" variant="h5">
				<Typography  marginRight={1}><Microscope size={24}/></Typography>
			    Output Data Not Available
			</Typography>
			<Typography variant="body1" textAlign="center" my={1}>
				Input some sequence and run analysis to get started
			</Typography>
		</Box>
	</Box>
  )
}

export default NullOutput;
