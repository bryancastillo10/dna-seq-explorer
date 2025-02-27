import { useState } from "react";
import styled from "styled-components";

import { ChevronDown } from "lucide-react";
import { Label } from "@/style/typography";

interface SelectProps {
    options: string[];
    label?: string;
    onChangeValue: (selection: string) => void;
    value: string;
}

const Select = (props: SelectProps) => {
    const {
        options,
        label="Label",
        value,
        onChangeValue
    } = props;
    
    const [isSelectOpened, setIsSelectOpened] = useState<boolean>(false);
    
    const openSelections = () => {
        setIsSelectOpened(!isSelectOpened);
    };
    
    return (
        <SelectRow>
            <Label>{label}</Label>
            <SelectContainer>
                <SelectBar $isOpen={isSelectOpened} onClick={openSelections}>
                    <SelectTextHeader>
                        {value}
                    </SelectTextHeader>
                    <StyledChevron $isOpen={isSelectOpened} size={20} />
                </SelectBar>
                <SelectList  $isOpen={isSelectOpened}>
                    {options.map((opt) => (
                    <SelectItem 
                        key={opt}
                        selected={opt === value}
                        onClick={() => {
                            setIsSelectOpened(false);
                            onChangeValue(opt);
                        }}
                    >
                    {opt}
                    </SelectItem>
                    ))}
                </SelectList>
            </SelectContainer>
        </SelectRow>
    )
}

export default Select;


const SelectRow = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    gap:20px;
`

const SelectContainer = styled.div`
    z-index:10;
    display: flex;
    flex-direction: column;
    width: 200px;
`

const SelectBar = styled.div<{$isOpen: boolean}>`
    width: 100%;
    height: 2rem;
    margin: 8px 0;
    padding: 0 6px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    align-items: center;
    border: 1px solid ${(props) => props.$isOpen ?
        props.theme.color.accent : props.theme.color.dark};
    background-color: ${(props) => props.theme.color.light};
    border-radius: 6px;
`

const SelectTextHeader = styled.p`
    display: flex;
    align-items: center;
    column-gap: 4px;
`

const SelectList = styled.ul <{ $isOpen: boolean }>`
    position: absolute;
    width: 200px;
    top:100%;
    z-index: 50;
    margin-top: 2px;
    overflow-y: auto;
    padding:0;
    border: 1px solid ${(props) => props.theme.dark};
    background-color: ${(props) => props.theme.color.canvas};
    max-height: ${({ $isOpen }) => ($isOpen ? '240px' : '0')}; 
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    border-radius: 4px;
    transition: max-height 0.5s ease;
`

interface SelectItemProps{
    selected?: boolean;
    visible?: boolean;
}

const SelectItem = styled.li<SelectItemProps>`
    font-size: ${(props) => props.theme.fontSize.sm};
    padding: 4px;    
    cursor:pointer;
    list-style: none;
    background-color: ${({ selected, theme }) => selected ? theme.color.accent : "transparent" };
    color: ${({ selected, theme }) => selected ? theme.color.light : "inheirt"};

    &:hover {
        background-color: ${({ theme }) => theme.color.accent};
        color: ${({ theme }) => theme.color.light}; 
    } 
`

const StyledChevron = styled(ChevronDown)<{$isOpen:boolean}>`
    transform: rotate(${(props) => (props.$isOpen ? "180deg": "0deg")});
    transition: transform 0.3s ease-out;
`
