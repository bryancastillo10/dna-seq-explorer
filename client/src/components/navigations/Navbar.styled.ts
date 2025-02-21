import styled from "styled-components"

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  padding: 14px 20px;
  background-color: ${(props) => props.theme.color.accent};
  color: ${(props) => props.theme.color.light};
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const NavMenu = styled.div`

`

export const LogoImage = styled.img`
  width:40px;
  height:40px;
`

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.secondary.join(', ')};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;

