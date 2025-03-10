import NucleotideBasicResult from "@/features/singleSeq/components/NucleotideBasicResult";
import ProteinBasicResult from "@/features/singleSeq/components/ProteinBasicResult";

import { getDataComponent } from "@/utils/getDataComponent";
import NullOutput from "@/components/layout/NullOutput";
import { type BasicAnalysisResults } from "../api/interface";

interface BasicResultBlockProps {
  sampleLabel:string;
  data: BasicAnalysisResults;
};

const BasicResultBlock = ({sampleLabel, data}: BasicResultBlockProps) => {
  
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
	<>
	{renderAnalysisResult()}
	</>
	);
}

export default BasicResultBlock;