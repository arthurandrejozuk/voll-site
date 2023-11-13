import styled from 'styled-components';
import Card from "@art/design-system/components/Card"

const StyledCards = styled.div`
    
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;

`

export default function Cards(){
    return(
        <StyledCards>
            <Card area={"Angiologista"} doutora={"Dr. Ana Lúcia"}  imagem={'/img/doutora.png'}/>

            <Card area={"Angiologista"} doutora={"Dr. Ana Lúcia"}  imagem={'/img/doutora.png'}/>

            <Card area={"Angiologista"} doutora={"Dr. Ana Lúcia"}  imagem={'/img/doutora.png'}/>
        </StyledCards>
    )
}