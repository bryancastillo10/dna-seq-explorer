import styled from "styled-components";
import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Title, Nav, NavLayout, Paragraph } from "@/style/globalStyles";
import AppLogo from "@/assets/images/base-dna.png";

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
            {navitems.map((nav) => {
              const Icon = nav.icon;
              return (
                <StyledLink key={nav.id} to={nav.link}>
                  <Item>
                    <Icon />
                    <Paragraph size="lg">{nav.name}</Paragraph>
                    </Item>
                </StyledLink>
              )
            })}
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

const Item = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  gap: 14px;
  width: fit-content;
  cursor:pointer;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.color.light};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.light};
  text-decoration: none;
`
const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;
