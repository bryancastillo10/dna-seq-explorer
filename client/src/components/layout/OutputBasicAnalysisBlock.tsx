import { Box, Typography } from "@mui/material"

import LongStringResult from "@/components/ui/LongStringResult"

const OutputBasicAnalysisBlock = () => {

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
            <Box p={2} height={400}>
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
          
                <Typography>GC Content</Typography>
                <Typography>Nucleotide Frequency</Typography>
            </Box>  
      </Box>
  )
}

export default OutputBasicAnalysisBlock
