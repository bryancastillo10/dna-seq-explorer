import { createFileRoute } from '@tanstack/react-router';
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputSingleSequenceBlock from '@/components/layout/InputSingleSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';
import BasicResultBlock from '@/features/singleSeq/components/BasicResultBlock';
import DNALoader from '@/components/common/DNALoader';

import useBasicAnalysis from '@/features/singleSeq/hooks/useBasicAnalysis';
import useDelayedLoading from '@/hooks/useDelayedLoading';
import useFileExport from '@/features/fileExport/hooks/useFileExport';
import { getMainLayout } from '@/utils/getMainLayout';

import { useModalStore } from '@/zustand/modal';
import { SaveModal } from '@/components/ui/outputs';

export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

function RouteComponent() {
  
  const pageDescription = `Enter your DNA/RNA or protein sequence, choose the sequence type, 
    and click “Run” to analyze. For DNA/RNA sequences, you can expect outputs such as GC content, 
    nucleotide frequency, and transcription analysis; for protein sequences, you can expect 
    outputs such as amino acid frequency, molecular weight, and reading frames. 
    Click “Save Output” to save your results, and “Clear” to start a new analysis. Ensure that 
    your inputs are correct to avoid warnings.
  `

  const {runBasicAnalysis, analysisResult, loading, reset } = useBasicAnalysis();
  const sampleLabel = analysisResult?.sampleLabel || "";
  const data = analysisResult?.data || {};

  const delayedLoading = useDelayedLoading(loading);


  const { isOpen, closeModal } = useModalStore();

  const { fileExport, updateFileExport } = useFileExport("basic");

  return (
    <Stack width="100%">
      <SectionHeader
        title="Basic Sequence Analysis"
        description={pageDescription}
      />
      <Stack sx={getMainLayout()}>
        <InputSingleSequenceBlock 
          analysisFeature='basic' 
          runAnalysis={runBasicAnalysis}
        />
          <OutputBlock>
          {delayedLoading ? <DNALoader/> 
            :( <BasicResultBlock
                  sampleLabel={sampleLabel}
                  data={data}
                  reset={reset}
               />)}
        </OutputBlock>

        <SaveModal
            isOpen={isOpen}
            onClose={closeModal}
            sampleLabel={sampleLabel}   

            fileExport={fileExport}
            results={data}
            updateFileExport={updateFileExport}
        />
      </Stack>
    </Stack>
  )
}
