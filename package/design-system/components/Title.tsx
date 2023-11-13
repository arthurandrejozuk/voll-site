import styled from "styled-components";
import React from "react";

const StyledTitle = styled.h1`
    
    color: ${props => props.theme.primaries.brightBlue};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    div{
        width: 24px;
    }

`

interface TitleProps {
    children: string
}

export default function Title({children, }:TitleProps){
    return(
        <StyledTitle>
            {children}
        </StyledTitle>
    )
}
