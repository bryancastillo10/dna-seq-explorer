import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  )
}

export default Footer;


const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  padding: 14px 20px;
  background-color: ${(props) => props.theme.color.accent};
  color: ${(props) => props.theme.color.light};
`