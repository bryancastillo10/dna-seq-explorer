import AppLogo from "@/assets/images/base-dna.png";
import { Menu } from "lucide-react";
import { Title, Nav, NavLayout } from "@/style/globalStyles";
import styled from "styled-components";


const Navbar = () => { 
  return (
    <Nav stickyPosition="top">
      <NavLayout>
        <NavbarLogo>
          <LogoImage src={AppLogo} alt="logo" />
          <Title>DNASeq Explorer</Title>
        </NavbarLogo>
        <NavMenu>
          <StyledMenu size={24}/>
        </NavMenu>
      </NavLayout>
    </Nav>
  )
}

export default Navbar;

const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const NavMenu = styled.div`
  display: flex;
  gap: 12;
  align-items:center;
  margin-right:8px;
  cursor:pointer;
`

const StyledMenu = styled(Menu)`
  transition: color 0.5s ease-in-out, transform 0.5s;

  &:hover {
    color: ${(props) => props.theme.color.canvas};
    transform: scale(1.1);
  }
`

const LogoImage = styled.img`
  width:40px;
  height:40px;
`
