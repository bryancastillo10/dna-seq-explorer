import { Paragraph, Title } from '@/style/globalStyles'
import { createLazyFileRoute } from '@tanstack/react-router'

import styled from 'styled-components'
import { mediaQuery } from '@/utils/breakpoints'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="">
      <Title>Simplified Bioinformatics Tool For Sequence Analysis</Title>  
      <ParagraphContainer>
        <Paragraph $alignment="justify" color="dark">
          DNASeq Explorer is a simple web application designed to help life science enthusiasts to explore &
          analyzing biological sequences. Whether you&apos;re a student just starting to learn about molecular biology
          or a researcher looking for quick and seamless tool, this app offers you some features
          assisting on common DNA Analysis tasks.
        </Paragraph>
      </ParagraphContainer>
    </div>)
}


const ParagraphContainer = styled.div`
  width: 100%;  

  ${mediaQuery("md")} {
    width: 60%;
  }
`