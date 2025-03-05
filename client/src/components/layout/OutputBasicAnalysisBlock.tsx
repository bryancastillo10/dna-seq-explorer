import { Box, Stack, Typography } from "@mui/material"
import { Tag } from "lucide-react"
import NucleotideBasicResult from "@/features/singleSeq/components/NucleotideBasicResult"

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
              Sample Data Label
            </Typography>
          </Stack>
          <NucleotideBasicResult/>
      </Box>
  )
}

export default OutputBasicAnalysisBlock
