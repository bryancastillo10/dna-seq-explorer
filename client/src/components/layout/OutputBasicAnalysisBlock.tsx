import { Box, Stack, Typography } from "@mui/material"
import { Tag } from "lucide-react"

import NucleotideBasicResult from "@/features/singleSeq/components/NucleotideBasicResult"
import { mockDNAData } from "@/features/singleSeq/api/mockData"

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
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <Tag size={20}/>
            <Typography>
              {mockDNAData.sampleLabel}
            </Typography>
          </Stack>
          <NucleotideBasicResult
            analysisResult={mockDNAData.data}
          />
      </Box>
  )
}

export default OutputBasicAnalysisBlock
