import { createLazyFileRoute } from '@tanstack/react-router'
import styled from 'styled-components'

import { UnorderedList, BulletPoint, Section, Grid } from '@/style/globalStyles'
import { P, Title } from '@/style/typography'

import { mediaQuery } from '@/utils/breakpoints'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Section>
      <Title>Simplified Bioinformatics Tool For Sequence Analysis</Title>  
      <PContainer>
        <P $alignment="justify">
          DNASeq Explorer is a simple web application designed to help life science enthusiasts to explore &
          analyzing biological sequences. Whether you&apos;re a student just starting to learn about molecular biology
          or a researcher looking for quick and seamless tool, this app offers you some features
          assisting on common DNA Analysis tasks.
        </P>
      </PContainer>
      <Grid cols={2}>
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
        <Block>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit possimus ut est! Aut quibusdam ullam fugit rerum quae cupiditate saepe!
        </Block>
      </Grid>
    </Section>
  )
}

const PContainer = styled.div`
  width: 100%;  

  ${mediaQuery("md")} {
    width: 85%;
  }

  ${mediaQuery("xl")} {
    width: 60%;
  }
`

const Block = styled.div`
  
`
