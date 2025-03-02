import { createFileRoute } from '@tanstack/react-router';
import { useState, type ChangeEvent } from 'react';


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
    </div>
  )
}

