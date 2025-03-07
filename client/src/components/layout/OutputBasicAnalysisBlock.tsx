import { Box,  Typography } from "@mui/material"

import NucleotideBasicResult from "@/features/singleSeq/components/NucleotideBasicResult";
import ProteinBasicResult from "@/features/singleSeq/components/ProteinBasicResult";

import { mockDNAData } from "@/features/singleSeq/api/mockData";
import { getDataComponent } from "@/utils/getDataComponent";
import NullOutput from "./NullOutput";

const OutputBasicAnalysisBlock = () => {
  const { sampleLabel, data } = mockDNAData;
  // const data = null;
  // const sampleLabel = "Test Sample";

  const renderAnalysisResult = () => {
    switch(getDataComponent(data)) {
      case "nucleotide":
        return (
          <NucleotideBasicResult
            sampleLabel={sampleLabel}
            analysisResult={data}
          />);
      case "protein":
        return (
          <ProteinBasicResult
            sampleLabel={sampleLabel}
            analysisResult={data}
          />);
      default:
        return <NullOutput/>;
    }

  };

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
         {renderAnalysisResult()}
      </Box>
  )
}

export default OutputBasicAnalysisBlock
