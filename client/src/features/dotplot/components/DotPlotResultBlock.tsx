import { Stack, Box, Typography } from '@mui/material'



import { IntValueResult } from '@/components/ui/outputs';
import { ControlButtons } from '@/components/ui/form';

import type { DotPlotResponse } from '@/features/dotplot/api/interface';
import type { IExportData } from '@/features/fileExport/hooks/useFileExport';

interface DotPlotResultBlockProps {
	result: DotPlotResponse;
	reset: () => void;
	openExportModal: (data: IExportData) => void;
}

const DotPlotResultBlock = ({result, reset, openExportModal}: DotPlotResultBlockProps) => {


	const { seqALabel, seqBLabel, match, mismatch } = result;

	const imageSrc = `data:image/png;base64,${result.image}`;

    const exportData = { 
		seq_A_label: seqALabel,
		seq_B_label: seqBLabel,
		results: { match, mismatch, image: imageSrc}
	};

    return (
		<Stack flexDirection="column" gap={2} >

			<img src={imageSrc} alt="Dotplot" />

			<Box sx={{display:"flex", justifyContent:"center"}}>
				<Typography variant="body2">{seqALabel} vs. {seqBLabel}</Typography>
			</Box>

			<Box sx={{display:"flex", justifyContent:"space-evenly"}}>
				<IntValueResult
					title="Matches"
					result={match}
				/>

				<IntValueResult
					title="Mismatches"
					result={mismatch}
				/>
			</Box>

			<ControlButtons
				mainBtnLabel='Save'
				mainBtnAction={() => openExportModal(exportData)}
				otherBtn1Label='Clear Output'
				otherBtn1Action={reset}
				withOtherBtn2={false}
			/>
		</Stack>
  )
}

export default DotPlotResultBlock;
