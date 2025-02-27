import type { ChangeEvent } from "react";
import styled from "styled-components";
import { Label } from "@/style/typography";

import { type LucideIcon } from "lucide-react";

interface FormInputProps {
  id: string;
  value: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: LucideIcon;
  disabled?: boolean;
  required?: boolean;
};


const FormInput = (props: FormInputProps) => {
  const {
    id,
    value,
    label ="Label",
    onChange,
    disabled,
    required,
    icon: Icon
  } = props;
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        id={id}
        type="text"
        value={value}
        disabled={disabled}
        required={required}
        onChange={onChange}
      />
      {Icon &&
        <IconWrapper>
          <Icon size={20} />
        </IconWrapper>}
    </InputContainer>
  )
}

export default FormInput;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap:12px;
  width: fit-content;
  height:30px;
  padding: 4px 8px;
`

const Input = styled.input<{width?: string | number}>`
  border-radius:14px;
  height:26px;
  outline:none;
  border: 1px solid #847E89;
  width: ${({width = 300 }) => (typeof width === "number" ? `${width}px` : width)};
  text-indent: 5%;
  font-style: ${(props) => props.theme.fontFamily.primary.join(', ')};
  color: ${(props) => props.theme.color.dark};
  background-color: ${(props) => props.theme.color.light};

  &:focus{
    outline:none;
  }
`

const IconWrapper = styled.div`
  position:absolute;
  color: ${(props) => props.theme.color.lightGray};
  right: 4%;
  bottom: 6%;
`
