import { Nav, NavLayout } from "@/style/globalStyles";

import styled from "styled-components";
import { mediaQuery } from "@/utils/breakpoints";

const Footer = () => {
  return (
    <Nav $stickyPosition="bottom">
      <NavLayout>
        <Copyright>
          &copy; {new Date().getFullYear()} DNASeq-Explorer. Developed by Bryan C.
          All rights reserved.
        </Copyright>
      </NavLayout>
    </Nav>
  )
}

export default Footer;

const Copyright = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.light};
  text-align: center;

  ${mediaQuery("lg")}{
  text-align: left;
  }

`