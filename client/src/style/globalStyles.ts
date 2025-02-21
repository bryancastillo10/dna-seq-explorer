import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@200;300;400;500;700;800&display=swap');

    body{
        margin: 0;
        font-family: ${(props) => props.theme.fontFamily.primary.join(', ')};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        background-color: ${(props) => props.theme.color.canvas};
        color: ${(props) => props.theme.color.dark};
    }
`