import NucleotideBasicResult from "@/features/singleSeq/components/NucleotideBasicResult";
import ProteinBasicResult from "@/features/singleSeq/components/ProteinBasicResult";

import { getDataComponent } from "@/utils/getDataComponent";
import NullOutput from "@/components/layout/NullOutput";
import { type BasicAnalysisResults } from "@/features/singleSeq/api/interface";

interface BasicResultBlockProps {
  sampleLabel:string;
  data: BasicAnalysisResults;
  reset: () => void;
};

const BasicResultBlock = ({sampleLabel, data, reset }: BasicResultBlockProps) => {
  
  const renderAnalysisResult = () => {
    switch(getDataComponent(data)) {
      case "nucleotide":
        return (
          <NucleotideBasicResult
            sampleLabel={sampleLabel}
            analysisResult={data}
            reset={reset}
          />);
      case "protein":
        return (
          <ProteinBasicResult
            sampleLabel={sampleLabel}
            analysisResult={data}
            reset={reset}
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