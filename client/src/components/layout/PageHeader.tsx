import { Title, P } from "@/style/typography";
import styled from "styled-components";
import { mediaQuery } from "@/utils/breakpoints";

interface PageHeaderProps {
    title: string;
    description: string;
}


const PageHeader = ({title, description}: PageHeaderProps) => {
  return (
    <div>
      <Title>{title}</Title>  
      <PContainer>
        <P $alignment="justify">
         {description}
        </P>
      </PContainer>
    </div>
  )
}

export default PageHeader;


const PContainer = styled.div`
  width: 100%;  

  ${mediaQuery("md")} {
    width: 85%;
  }

  ${mediaQuery("xl")} {
    width: 60%;
  }
`