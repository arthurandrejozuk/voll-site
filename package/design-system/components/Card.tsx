import styled from "styled-components";
import React from "react";

const StyledCard = styled.div`
    
    display: flex;
    padding: 16px;
    width: 300px;
    background-color: ${props => props.theme.secondaries.white};
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    .card{
        display: flex;
        width: 300px;
        h1,p{
            color: ${props => props.theme.secondaries.gray};
        }
        img{
            margin-right: 12px;
            border-radius: 100%;
            width: 65px;
            height: 80px;
            border: 2px solid ${props => props.theme.primaries.darkBlue} ;
        }
        .card__desc{
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 8px;
        }
    }
` 

export default function Card({imagem, doutores, area, avaliacao}){
    return(
        <StyledCard>
            <div className="card">
                
                    <img src={imagem} alt="Foto da/o doutora/o" />
                
                <div className="card__desc">
                    <h1>{doutores}</h1>
                    <p>{area}</p>
                </div>
            </div>
            <div>
                {avaliacao}
            </div>
        </StyledCard>
    )
}