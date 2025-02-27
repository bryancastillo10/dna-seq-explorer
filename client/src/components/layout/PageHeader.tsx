import { Title, P } from "@/style/typography";
import styled from "styled-components";
import { mediaQuery } from "@/utils/breakpoints";

interface PageHeaderProps {
    title: string;
    description: string;
}


const PageHeader = ({title, description}: PageHeaderProps) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>  
      <PContainer>
        <P $alignment="justify">
         {description}
        </P>
      </PContainer>
    </HeaderContainer>
  )
}

export default PageHeader;


const HeaderContainer = styled.div`
  width:"fit-content";  
`
const PContainer = styled.div`
  width: 100%;  

  ${mediaQuery("md")} {
    width: 85%;
  }

  ${mediaQuery("xl")} {
    width: 60%;
  }
`