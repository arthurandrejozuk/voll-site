import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
    
    background-color: ${props => props.theme.primaries.darkBlue};
    color: ${props => props.theme.secondaries.white};
    max-width: 400px;
    width: fit-content;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    border: 1px solid ${props => props.theme.primaries.darkBlue};;
    cursor: pointer;
    
`

interface ButtonProps {
    children: string
    href?: string 
}

export default function Button({children, href}:ButtonProps){
    return(
        <StyledButton>
            <a href={href}>{children}</a>
        </StyledButton>
    )
}
