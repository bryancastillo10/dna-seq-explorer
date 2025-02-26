import { Paragraph, Title, UnorderedList, BulletPoint, Flex } from '@/style/globalStyles'
import { createLazyFileRoute } from '@tanstack/react-router'

import styled from 'styled-components'
import { mediaQuery } from '@/utils/breakpoints'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div style={{width:"100%"}}>
      <Title>Simplified Bioinformatics Tool For Sequence Analysis</Title>  
      <ParagraphContainer>
        <Paragraph $alignment="justify">
          DNASeq Explorer is a simple web application designed to help life science enthusiasts to explore &
          analyzing biological sequences. Whether you&apos;re a student just starting to learn about molecular biology
          or a researcher looking for quick and seamless tool, this app offers you some features
          assisting on common DNA Analysis tasks.
        </Paragraph>
      </ParagraphContainer>
      <Flex>
        <Block>
          <Title>How to Get Started?</Title>
          <UnorderedList>
            <BulletPoint>
              You can check the available features on the sidebar
              which consists of basic analysis, advanced analysis, dot plot alignment,
              local alignment, and global alignment
            </BulletPoint>
            <BulletPoint>
              Provide an input sequence you want to analyze, for basic & advanced analysis (only one sequence is allowed)
              the other features are for pairwise sequence alignments using different algorithms.
            </BulletPoint>
            <BulletPoint>
              The results would be displayed accordingly on the output screen provided, and longer sequence may take a longer time
              to process. Take note that the AI-feature may had provide some mistakes and does not represent every existing gene.
            </BulletPoint>
          </UnorderedList>
        </Block>
        <Block></Block>
      </Flex>
    </div>
  )
}


const ParagraphContainer = styled.div`
  width: 100%;  

  ${mediaQuery("md")} {
    width: 85%;
  }

  ${mediaQuery("xl")} {
    width: 70%;
  }
`

const Block = styled.div`
  border: 1px solid #000;
  width: 550px;
  height: 450px;  
`

