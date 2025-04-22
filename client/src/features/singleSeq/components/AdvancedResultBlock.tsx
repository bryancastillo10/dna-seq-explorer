import { Stack } from "@mui/material";

import { ControlButtons } from "@/components/ui/form";
import {ShortStringResult, BarChartBlock, SeqLabelOutput }from "@/components/ui/outputs";

import type { AdvancedAnalysisResponse } from "@/features/singleSeq/api/interface";
import type { IExportData } from "@/features/fileExport/hooks/useFileExport";

interface AdvancedResultBlockProps {
	sampleLabel:string;
	data: AdvancedAnalysisResponse;
	reset: () => void;
	openExportModal: (data: IExportData) => void;
}

const AdvancedResultBlock = ({sampleLabel, data, reset, openExportModal}: AdvancedResultBlockProps) => {

  const {codonUsage, dnaType, kingdomTaxa } = data;

  const exportData = { 
		results: data, 
		seq_label: sampleLabel 
	};

  return (
	<Stack flexDirection="column" gap={2} >
		<SeqLabelOutput
			sampleLabel={sampleLabel}
		/>

		<BarChartBlock
			title="Codon Usage"
			data={codonUsage}
		/>

		<ShortStringResult
			title="DNA Type Prediction"
			result={dnaType}
		/>

		<ShortStringResult
			title="Possible Taxa (Kingdom)"
			result={kingdomTaxa}
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

export default AdvancedResultBlock;
