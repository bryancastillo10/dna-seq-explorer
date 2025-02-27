import styled from "styled-components";
import { alignParagraph } from "@/utils/alignParagraph";

export interface PProps {
  size?: "xl" | "lg" | "base" | "sm" | "xs";
  color?: "dark" | "light";
  $alignment?: "left" | "center" | "right" | "justify" |"balance";
}

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.secondary.join(', ')};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`;

export const P = styled.p<PProps>`
  font-family: ${(props) => props.theme.fontFamily.primary.join(', ')};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.size ? props.theme.fontSize[props.size]: props.theme.fontSize.base};
  color: ${(props) => props.color === "light" ? props.theme.color.light : props.theme.color.dark};
  text-align: ${(props) => alignParagraph(props.$alignment)};
`

export const Highlight = styled.span`
  font-weight:${(props) => props.theme.fontWeight.semibold};
  font-family: ${(props) => props.theme.fontFamily.primary.join(', ')};
  color: ${(props) => props.theme.color.darkAccent};
`

export const Label = styled.label`
  font-family: ${(props) => props.theme.fontFamily.primary.join(', ')};
  font-size: ${(props) => props.theme.fontSize.lg};
`

P.defaultProps = {
  color: "dark",
  $alignment:"left"
}
