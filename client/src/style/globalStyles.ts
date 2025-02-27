import { createGlobalStyle, styled } from "styled-components";
import { mediaQuery } from "@/utils/breakpoints";

export const GlobalStyles = createGlobalStyle`
    body{
      margin: 0;
      padding:0;
      font-family: ${(props) => props.theme.fontFamily.primary.join(', ')};
      font-weight: ${(props) => props.theme.fontWeight.regular};
      background-color: ${(props) => props.theme.color.canvas};
      color: ${(props) => props.theme.color.dark};
    }
`

//  Navigation 

export const Nav = styled.nav<{$stickyPosition: "top" | "bottom"}>`
  position: ${(props) => props.$stickyPosition === "bottom" ? "fixed":"sticky"};
  ${(props) => props.$stickyPosition === "bottom" ? "bottom: 0;": "top: 0;"}
  background-color: ${(props) => props.theme.color.accent};
  color: ${(props) => props.theme.color.light};
  width: 100%;
`
export const NavLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 30px;
`

// Layout
export const Section = styled.section`
  width: fit-content;
  overflow-y: scroll;
  padding: 0 18px;
`


export const Flex = styled.div <{ $justifyContent?: "flex-start" | "center" | "flex-end" }>`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  gap: 14px;

  ${mediaQuery("xl")}{
    flex-direction: row;
    align-items: flex-start;
  }
`

export const Grid = styled.div<{cols:number}>`
  display: grid;
  grid-template-columns: "repeat(1, minmax(0,1fr))";
  align-items: start;
  gap: 20px;

  ${mediaQuery("xl")}{
  grid-template-columns: ${({cols}) => `repeat(${cols}, minmax(0,1fr))`};
  }
`

// List Items
export const UnorderedList = styled.ul`
  padding: 8px 4px;
`;

export const BulletPoint = styled.li`
  list-style: disc;
  margin-left: 12px;
  padding: 10px 0;
  text-align: justify;
`;