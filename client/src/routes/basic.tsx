import { createFileRoute } from '@tanstack/react-router';
import { useState, type ChangeEvent } from 'react';

import { Grid, Section } from '@/style/globalStyles';
import PageHeader from '@/components/layout/PageHeader';


import FormInput from '@/components/ui/FormInput';
import Select from '@/components/ui/Select';
import { TestTubeDiagonal } from 'lucide-react';


export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `
    Enter your DNA/RNA or Protein sequence, choose the sequence type, and click "Run" to analyze. For
  DNA/RNA, you can expect outputs such as GC content, nucleotide frequency and transcription;
  for Protein, you can expect to get amino acid frequency,molecular weight, or reading frames. "Save Output" to save results,
  and "Clear" to start a new. Ensure correct inputs to avoid warnings.
  `
  
  const [value, setValue] = useState<string>("");
  
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
  };
  
  const selectOptions = ["DNA", "RNA", "Protein"]
  const [type, setType] = useState<string>("DNA");
  return (
    <Section>
      <PageHeader
        title="Basic Sequence Analysis"
        description={pageDescription}
      />
      
      <Grid cols={2}>
        <div className="">
        <FormInput
          label="Sample Name"
          icon={TestTubeDiagonal}
          id="label"
          value={value}
          onChange={handleChangeInput}
        />
        
        <Select
          value={type}
          label="Biomolecule Type"
          onChangeValue={(selected: string) => setType(selected) }  
          options={selectOptions}
          />
        </div>
        <div className="">Some Section Here</div>
      </Grid>
    </Section>
  )
}

