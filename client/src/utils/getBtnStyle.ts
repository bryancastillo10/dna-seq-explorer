import { css } from "styled-components";

export const getBtnStyle = (variant?: string) => {
  switch (variant) {
    case "primary":
      return css`
        border: 1px solid transparent;
        background-color: ${(props) => props.theme.color.accent}; 
        color: ${(props) => props.theme.colors.light};
        &:hover {
          background-color: ${(props) =>props.theme.color.lightGray};
        }
      `;
    case "outline":
      return css`
        border: 1px solid ${(props) => props.theme.color.accent};
        background-color: transparent;
        color: ${(props) => props.theme.color.accent};
        &:hover {
          background-color: ${(props) => props.theme.color.accent};
          color: ${(props) => props.theme.colors.light};
        }
      `;
    case "danger":
      return css`
        border: 1px solid transparent;
        background-color: ${(props) => props.theme.color.danger}; 
        color: ${(props) => props.theme.colors.light};
        &:hover {
          background-color: ${(props) => props.theme.color.lightGray}; 
        }
      `;
    default:
      return css`
        background-color: ${(props) => props.theme.color.canvas}; 
        border: 1px solid ${(props) => props.theme.color.dark};
        color: ${(props) => props.theme.color.dark}; 
        &:hover {
          background-color: ${(props) => props.theme.color.accent}; 
        }
      `;
  }
};
