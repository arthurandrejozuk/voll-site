import styled from "styled-components";
import React from "react";

interface TextosProps {
    title?: string
    children: string
    pessoa?: string 
}

const TextoStyled = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
    width: 40%;
    max-width: max-content;
    text-align: center;
    line-height: 19.4px;
    margin-bottom: 12px;
    h1{
        
        color: ${props => props.theme.primaries.darkBlue}
    }
    .pessoa{
        color: #6B6E71;
        font-weight: 700;
    }
    p{
       
        color:#6d7378
    }
`

export default function Textos({title, children, pessoa}:TextosProps){
    return(
        <TextoStyled>
            <h1>{title}</h1>
            <p>{children}</p>
            <p className="pessoa">{pessoa}</p>
        </TextoStyled>
    )
}