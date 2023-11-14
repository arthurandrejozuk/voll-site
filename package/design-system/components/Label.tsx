import styled from "styled-components";
import React from "react";

const LabelStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    width: 60%;
    input{
        padding: 12px 12px;
        border-radius: 8px;
        width: 100%;
        border: none;
        background-color: #F8F8F8;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
    }
    h2{
        color: ${props => props.theme.primaries.darkBlue};
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19.4px; 
    }
    
`

export default function Label({placeholder, name, children}){
    return(
        <LabelStyled>
            <h2>{children}</h2>
            <input type="text" name={name} placeholder={placeholder} />
        </LabelStyled>
    )
}