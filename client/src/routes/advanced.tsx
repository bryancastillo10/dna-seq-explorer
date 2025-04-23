import { createFileRoute } from '@tanstack/react-router'
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputSingleSequenceBlock from '@/components/layout/InputSingleSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';
import AdvancedResultBlock from '@/features/singleSeq/components/AdvancedResultBlock';
import DNALoader from '@/components/common/DNALoader';
import NullOutput from '@/components/layout/NullOutput';

import useAdvancedAnalysis from '@/features/singleSeq/hooks/useAdvancedAnalysis';
import useSingleSeqExport from '@/features/fileExport/hooks/useSingleSeqExport';
import useDelayedLoading from '@/hooks/useDelayedLoading';
import useFileExport from '@/features/fileExport/hooks/useFileExport';
import { getMainLayout } from '@/utils/getMainLayout';

import { useModalStore } from '@/zustand/modal';
import { SaveModal } from '@/components/ui/outputs';

export const Route = createFileRoute('/advanced')({
  component: RouteComponent,
});

function RouteComponent() {
  const pageDescription = `
  Enter your DNA/RNA sequence for advanced AI classification based on codon usage. Protein sequences are not allowed.
  Note: Although the model was rigorously evaluated using cross-validation and exploratory data analysis (EDA), it may still produce errors and is intended for demonstration purposes only.
  Click “Run” to analyze, “Save Output” to save your results, and “Clear” to start over.`

  const { runAdvancedAnalysis, analysisResult, loading, reset } = useAdvancedAnalysis();

  const sampleLabel = analysisResult?.sampleLabel || "";
  const data = analysisResult || null;

  const delayedLoading = useDelayedLoading(loading);

  const { isOpen, closeModal } = useModalStore();

  const { fileExport, extensionOptions, handleSelectChange, openExportModal } = useFileExport("advanced");

  const { exportSingleSeqResult } = useSingleSeqExport();

  return (
  <Stack width="100%">
    <SectionHeader
      title="DNA Classification Based on Trained Codon Usage Dataset"
      description={pageDescription}
    />

    <Stack sx={getMainLayout()}>
      <InputSingleSequenceBlock 
        analysisFeature='advanced' 
        runAnalysis={runAdvancedAnalysis}
        />
        <OutputBlock>
          {delayedLoading ? <DNALoader/> 
          :( analysisResult ? <AdvancedResultBlock
            sampleLabel={sampleLabel}
            openExportModal={openExportModal}
            data={data}
            reset={reset}
          /> : <NullOutput/>)}
        </OutputBlock>


         <SaveModal
            isOpen={isOpen}
            onClose={closeModal}
            sampleLabel={sampleLabel}   

            fileExport={fileExport}
            extensionOptions={extensionOptions}
            handleSelectChange={handleSelectChange}
            handleExport={exportSingleSeqResult}
        />
    </Stack>
  </Stack>
  )
}
