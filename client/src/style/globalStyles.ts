import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        font-family: ${(props) => props.theme.fontFamily.primary.join(', ')};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        background-color: ${(props) => props.theme.color.canvas};
        color: ${(props) => props.theme.color.dark};
    }
`

//  Navigation 

interface NavProps {
    stickyPosition: "top" | "bottom";
}

export const Nav = styled.nav<NavProps>`
  position: sticky;
  ${(props) => props.stickyPosition === "bottom" ? "bottom :0;": "top: 0;"}
  padding: 14px 20px;
  background-color: ${(props) => props.theme.color.accent};
  color: ${(props) => props.theme.color.light};
`
export const NavLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// Typography

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.secondary.join(', ')};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;
