import styled from "styled-components";

const Container = ({children}:{children: React.ReactNode}) => {
  return (
    <Section>
      {children}
    </Section>
  )
}

export default Container;

const Section = styled.section`
  display: flex;
  flex-direction:column;
  width: fit-content;
  height: 100%;
  padding: 14px;
`