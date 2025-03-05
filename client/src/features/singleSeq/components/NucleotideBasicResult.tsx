import { Typography, Box } from "@mui/material";
import LongStringResult from "@/components/ui/LongStringResult";

const NucleotideBasicResult = () => {
  return (
		<Box height={400}>
        <LongStringResult
            label="Transcription"
            result="GCUACUAGCAGGGGCAGCAGCAUUGCUACUAGCAGGGGCAGCAGCAUUGCUACUAGCAGGGGCAGCAGCAUU"
          />
        <LongStringResult
            label="Reverse Compliment"
            result="AATGCTGCTGCCCCTGCTAGTAGCAATGCTGCTGCCCCTGCTAGTAGC"
        />
        <LongStringResult
            label="Translated Sequence"
            result="ATSRGSSI"
        />

		{/* GC Content */}
        <Box sx={{ display:"flex", alignItems:"center", gap: 2 }}>
        	<Typography variant="h6">GC Content</Typography>
			<Typography variant="h5">60 %</Typography>
      	</Box>
			
		


		  <Typography variant="h6">Nucleotide Frequency</Typography>
        </Box>  
  )
};

export default NucleotideBasicResult;
