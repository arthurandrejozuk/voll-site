import React from "react"
import styled from "styled-components";

const StyledRecomendados = styled.div`
    
    display: flex;
    padding: 6px;
    background-color:  #E7EBEF;
    color: gray;
    gap: 4px;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    button{
        background-color: #E7EBEF;
        border: none;
        padding-top: 2px;
    }
    button:hover{
        cursor: pointer;
    }
`

export default function Recomendados({children, button}){
    return(
        <StyledRecomendados>
            <p>{children}</p>
            <button>
                {button}
            </button>
        </StyledRecomendados>
    )
}