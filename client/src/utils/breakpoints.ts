import { css } from "styled-components";

const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl:"1535px"
}

type BreakPoints = keyof typeof breakpoints;

export const mediaQuery = (key: BreakPoints) => css`
     @media (min-width: ${breakpoints[key]})`
