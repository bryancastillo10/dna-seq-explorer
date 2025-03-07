import NucleotideBasicResult from "@/features/singleSeq/components/NucleotideBasicResult";
import ProteinBasicResult from "@/features/singleSeq/components/ProteinBasicResult";

import { mockDNAData } from "@/features/singleSeq/api/mockData";
import { getDataComponent } from "@/utils/getDataComponent";
import NullOutput from "@/components/layout/NullOutput";

const BasicResultBlock = () => {
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
	<>
	{renderAnalysisResult()}
	</>
	);
}

export default BasicResultBlock;