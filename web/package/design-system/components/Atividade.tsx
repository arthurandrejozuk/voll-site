import styled from "styled-components";
import React from "react";

const AtividadesStyles = styled.div`
   display: flex;
    width: 282px;
    height: 132px;
    padding: 16px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 8px;
    background-color: #E7EBEF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.15);
`

export default function Atividade({icone, children}){
    return(
        <AtividadesStyles>
            <img src={icone} alt="Icone de atividade"/>
            <p>{children}</p>
        </AtividadesStyles>
    )
}