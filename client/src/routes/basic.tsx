import { createFileRoute } from '@tanstack/react-router';
import { Grid, Section } from '@/style/globalStyles';
import PageHeader from '@/components/layout/PageHeader';


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
  return (
    <Section>
      <PageHeader
        title="Basic Sequence Analysis"
        description={pageDescription}
      />
      
      <Grid cols={2}>
        
      </Grid>
    </Section>
  )
}

