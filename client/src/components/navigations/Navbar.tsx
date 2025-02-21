import AppLogo from "@/assets/images/base-dna.png";

import {
  Nav,
  NavContainer,
  NavbarLogo,
  LogoImage,
  Title,
  NavMenu
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavbarLogo>
          <LogoImage src={AppLogo} alt="logo" />
          <Title>DNASeq Explorer</Title>
        </NavbarLogo>
        <NavMenu>
            Some Nav Menu
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar;
