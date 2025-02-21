import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        font-family: ${(props) => props.theme.fontFamily.primary.join(', ')};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        background-color: ${(props) => props.theme.color.canvas};
        color: ${(props) => props.theme.color.dark};
    }
`