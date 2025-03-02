import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription =`DNASeq Explorer is a simple web application designed to help life science enthusiasts to explore & 
          analyzing biological sequences. Whether you're a student just starting to learn about molecular biology 
          or a researcher looking for quick and seamless tool, this app offers you some features
          assisting on common DNA Analysis tasks.`
  
  return (
     <div>
    <h1>How to Get Started?</h1>
      <p>You can check the available features on the sidebar
              which consists of basic analysis,
              advanced analysis, dot plot alignment, local alignment, and global alignment
        </p>
        <p> Provide an input sequence you want to analyze, for basic & advanced analysis (only one sequence is allowed)
              the other features are for pairwise sequence alignments using different algorithms.
        </p>
        <p>The results would be displayed accordingly on the output screen provided, and longer sequence may take a longer time
        to process. Take note that the AI-feature may had provide some mistakes and does not represent every existing gene.
     </p>
      
      </div>  
  )
};

