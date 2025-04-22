import { IntValueResult, LongStringResult } from "@/components/ui/outputs";
import { Stack } from "@mui/material";

import { ControlButtons } from "@/components/ui/form";

import type { LocalGlobalSeqResult } from "@/features/pairSeq/api/interface";
import type { IExportData } from "@/features/fileExport/hooks/useFileExport";

interface PairSeqAlignmentResultProps {
	result: LocalGlobalSeqResult<string>;
	reset: () => void;
	openExportModal: (data: IExportData) => void;
};

const PairSeqAlignmentResult = ({result, reset, openExportModal}: PairSeqAlignmentResultProps) => {

	const {  
		seqALabel,
		alignedSeqA,
		seqBLabel,
		alignedSeqB,
		similarity
	} = result;

 
  const exportData = {
		seq_A_label: seqALabel,
		seq_B_label: seqBLabel,
		results: {
			  alignedSeqA,
			  alignedSeqB,
			  similarity
			}
	};

  return (
	<Stack flexDirection="column" gap={2} >
		<LongStringResult
			label={`Aligned ${seqALabel}`}
			result={alignedSeqA}
			minHeight={200}
		/>

		<LongStringResult
			label={`Aligned ${seqBLabel}`}
			result={alignedSeqB}
			minHeight={200}
		/>

		<IntValueResult
			title="Percent Similarity"
			result={similarity}
			withUnit
		/>

		<ControlButtons
			mainBtnLabel="Save"
			mainBtnAction={() => openExportModal(exportData)}
			otherBtn1Label="Clear Output"
			otherBtn1Action={reset}
			withOtherBtn2={false}
		/>
	</Stack>
  )
}

export default PairSeqAlignmentResult;
