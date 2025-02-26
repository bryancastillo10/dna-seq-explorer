import styled, { keyframes } from "styled-components";
import { getBtnStyle } from "@/utils/getBtnStyle";

interface ButtonProps {
  action?: () => void;
  type?: "submit" | "reset" | "button";
  width?: string;
  loading?: boolean; 
  disabled?: boolean;
  fontSize?: string;
  variant?: "primary" | "outline" | "danger" | string;
  children: React.ReactNode;
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;


const ButtonContainer = styled.button<{
  $btnWidth?: string;
  $btnFontSize?: string;
  variant?: string;
}>`
  width: ${({ $btnWidth }) => $btnWidth || "auto"};
  font-size: ${({ $btnFontSize }) => $btnFontSize || "1rem"};
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  transition: background-color 0.5s ease-in-out;
  ${({ variant }) => getBtnStyle(variant)};
  cursor:pointer;
  
  &:disabled {
    background-color: ${(props) => props.theme.color.lightGray};
    cursor: not-allowed;
  }
`;

const StyledSpinner = styled.svg`
  animation: ${spin} 1s linear infinite;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  border: 2px solid #fff;
  border-top: 2px solid gray;
  border-radius: 50%;
`;

const ButtonLayout = styled.div`
  display:flex;
  align-items:center;
  gap: 1rem;  
`

const SpanText = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  font-size: ${(props) => props.theme.fontSize.base};
`

const Button = ({
  action,
  type = "button",
  width = "100%",
  fontSize = "16px",
  loading,
  disabled,
  variant = "primary",
  children,
}:ButtonProps) => {
  return (
    <ButtonContainer
      onClick={action}
      disabled={disabled}
      type={type}
      $btnWidth={width}
      $btnFontSize={fontSize}
      variant={variant}
    >
      {loading ? (
        <ButtonLayout>
          <StyledSpinner viewBox="0 0 24 24" />
          <SpanText>
            Loading . . .
          </SpanText>
        </ButtonLayout>
      ) : (
        children
      )}
    </ButtonContainer>
  );
};

export default Button;
