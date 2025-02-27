import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Nav, NavLayout } from "@/style/globalStyles";
import { Title, P } from "@/style/typography";
import AppLogo from "@/assets/images/base-dna.png";

import useOpenMenu from "@/zustand/openMenu";
import { navitems } from "@/constants/navbaritems";

const Navbar = () => { 
  const { toggleMenu, isMenuOpen } = useOpenMenu();
  
  return (
    <Nav $stickyPosition="top">
      <NavLayout>
        <NavbarLogo>
          <LogoImage src={AppLogo} alt="logo" />
          <Title>DNASeq Explorer</Title>
        </NavbarLogo>
        <div style={{ position: "relative" }} onClick={toggleMenu}>
          <NavMenu>
            {isMenuOpen ? <StyledIcon as={X} size={26} /> : <StyledIcon size={26} />}
          </NavMenu>
          <NavList $isOpen={isMenuOpen}>
            {navitems.map((nav) => {
              const Icon = nav.icon;
              return (
                <StyledLink key={nav.id} to={nav.link}>
                  <Item>
                    <Icon />
                    <P $alignment="left" size="lg" color="light">{nav.name}</P>
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

const StyledIcon = styled(Menu || X)`
  transition: color 0.5s ease-in-out, transform 0.5s;
  &:hover {
    color: ${(props) => props.theme.color.canvas};
    transform: scale(1.1);
  }
`;

const NavList = styled.div<{ $isOpen: boolean; }>`
  position: fixed;
  z-index:500;
  display: flex;
  flex-direction: column;
  gap:12px;
  right:0;
  padding: 14px;
  width: 300px;
  height: 90vh;
  background-color: ${(props) => props.theme.color.accent};
  transform: translateX(${(props) => (props.$isOpen ? "0" : "calc(100% + 20px)")});
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
  padding:8px;
`
const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;
