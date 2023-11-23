import styled from "styled-components";
import React from "react";

const PesquisaStyled = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 12px;
    span{
        background-color: #d2d2d2;
        border: none;
        cursor: pointer;
        padding: 12px;
        color: ${props => props.theme.secondaries.black};
        
    }
    input{
        display: flex;
        padding-right: 12px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: #EDEDED;
        border: 1px ;
        width: 300px;
    }
    input::placeholder{
        padding: 12px;
        color: black;
    }
    div{
       
        display: flex;
        border-radius: 8px;
        background-color: #EDEDED;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
    }
    @media(max-width: 500px){
        padding: 0;
    }

`

export default function Pesquisa({placeholder, children}){
    return(
        <PesquisaStyled>
            <div>
                <span>
                    {children}
                </span>
                <input type="text" placeholder={placeholder} />
            </div>
        </PesquisaStyled>
    )
}