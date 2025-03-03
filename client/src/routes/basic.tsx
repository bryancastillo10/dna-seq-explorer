import { createFileRoute } from '@tanstack/react-router';
import { TextField, Select, FormControl, Typography, MenuItem } from '@mui/material';

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
    <div className="">
      <h1>Basic Analysis</h1>
      <Typography>{pageDescription}</Typography>
      <FormControl>
        <Select
          id="seqType"
          value="Biomolecule Type"
        >
          <MenuItem value={10}>DNA</MenuItem>
          <MenuItem value={20}>RNA</MenuItem>
          <MenuItem value={30}>Protein</MenuItem>
        </Select>
        <TextField
          label="Sequence"
          multiline
          rows={10}
          variant="filled"
          style={{overflow:"auto"}}
        />
      </FormControl>
    </div>
  )
}

