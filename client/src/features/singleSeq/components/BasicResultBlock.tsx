import NucleotideBasicResult from "@/features/singleSeq/components/NucleotideBasicResult";
import ProteinBasicResult from "@/features/singleSeq/components/ProteinBasicResult";

import { mockDNAData } from "@/features/singleSeq/api/mockData";
import { getDataComponent } from "@/utils/getDataComponent";
import NullOutput from "@/components/layout/NullOutput";
import DNALoader from "@/components/common/DNALoader";

const BasicResultBlock = () => {
  const { sampleLabel, data } = mockDNAData;
  // const data = null;
  // const sampleLabel = "Test Sample";

  const loading = false;

  if(loading){
    return (<DNALoader/>)};

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