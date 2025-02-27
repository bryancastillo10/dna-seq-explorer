import { createGlobalStyle, styled } from "styled-components";

import { alignParagraph } from "@/utils/alignParagraph";
import { mediaQuery } from "@/utils/breakpoints";

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


export const Flex = styled.div <{$justifyContent?: "flex-start" | "center" | "flex-end"}>`
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

// Typography

export interface ParagraphProps {
  size?: "xl" | "lg" | "base" | "sm" | "xs";
  color?: "dark" | "light";
  $alignment?: "left" | "center" | "right" | "justify" |"balance";
}

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.secondary.join(', ')};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;

export const Paragraph = styled.p<ParagraphProps>`
  font-family: ${(props) => props.theme.fontFamily.primary.join(', ')};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.size ? props.theme.fontSize[props.size]: props.theme.fontSize.base};
  color: ${(props) => props.color === "light" ? props.theme.color.light : props.theme.color.dark};
  text-align: ${(props) => alignParagraph(props.$alignment)};
`
Paragraph.defaultProps = {
  color: "dark",
  $alignment:"left"
}

export const UnorderedList = styled.ul`
  padding: 8px 4px;
`;

export const BulletPoint = styled.li`
  list-style: disc;
  margin-left: 12px;
  padding: 10px 0;
  text-align: justify;
`;