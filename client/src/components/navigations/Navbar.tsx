import AppLogo from "@/assets/images/base-dna.png";
import { Menu } from "lucide-react";
import { Title, Nav, NavLayout } from "@/style/globalStyles";

import styled from "styled-components";


import useOpenMenu from "@/zustand/openMenu";
import { navitems } from "@/constants/navbaritems";

const Navbar = () => { 
  const { toggleMenu, isMenuOpen } = useOpenMenu();
  
  return (
    <Nav stickyPosition="top">
      <NavLayout>
        <NavbarLogo>
          <LogoImage src={AppLogo} alt="logo" />
          <Title>DNASeq Explorer</Title>
        </NavbarLogo>
        <div style={{ position: "relative" }}>
          <NavMenu>
            <StyledMenu size={24} onClick={toggleMenu} />
          </NavMenu>
          <NavList isOpen={isMenuOpen}>
            {navitems.map((nav) => (
              <div key={nav.id} className="">{nav.name}</div>
            ))}
          </NavList>
        </div>
      </NavLayout>
    </Nav>
  );
};

export default Navbar;

const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
`;

const StyledMenu = styled(Menu)`
  transition: color 0.5s ease-in-out, transform 0.5s;
  &:hover {
    color: ${(props) => props.theme.color.canvas};
    transform: scale(1.1);
  }
`;

const NavList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap:12px;
  right: -20px;
  top: 60px;
  padding: 14px;
  width: 300px;
  height: 90vh;
  background-color: ${(props) => props.theme.color.accent};

  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.5s ease-in-out;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;
