import styled from "styled-components";
import React from "react";

const StyledCard = styled.div`
    
    display: flex;
    padding: 16px;
    max-width: 550px;
    width: 400px;
    background-color: ${props => props.theme.secondaries.white};
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    .card{
        display: flex;
        
        h1,p{
            color: ${props => props.theme.secondaries.gray};
        }
        img{
            margin-right: 12px;
            width:60px;
            border-radius: 100%;
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

export default function Card({imagem, doutora, area}){
    return(
        <StyledCard>
            <div className="card">
                <div className="card__image">
                    <img src={imagem} alt="Foto da/o doutora/o" />
                </div>
                <div className="card__desc">
                    <h1>{doutora}</h1>
                    <p>{area}</p>
                </div>
            </div>
            <div>
                
            </div>
        </StyledCard>
    )
}