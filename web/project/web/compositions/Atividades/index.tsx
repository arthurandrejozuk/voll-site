import Atividade from "@art/design-system/components/Atividade";
import styled from "styled-components";

const AtividadesStyled = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    gap: 32px;
    flex-wrap: wrap;
`

export default function Atividades(){
    return(
        <AtividadesStyled>
            <Atividade icone={"img/health_and_safety.png"}>
                Encontre especialistas
            </Atividade>
            <Atividade icone={"img/calendar_month.png"}>
                Agende consultas
            </Atividade>
            <Atividade icone={"img/notifications.png"}>
                Defina lembretes
            </Atividade>
        </AtividadesStyled>
    )
}