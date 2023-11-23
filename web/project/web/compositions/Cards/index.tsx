import styled from 'styled-components';
import Card from "@art/design-system/components/Card"
import useDadosProfissional from '../../functions/useDadosProfissionais';
import Botao from "@art/design-system/components/Button"

const StyledCards = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: start;
    
`


export default function Cards(){

    let profissionais = useDadosProfissional().dados;

    return(
        <StyledCards>

            {profissionais && profissionais.length ? 
             profissionais?.map((profissional) => {
                return(
                    <Card 
                            area={profissional.especialidade} 
                            doutores={profissional.nome}
                            imagem={profissional.imagem}
                            avaliacao={5}
                    />
                )
            }):"Não há avaliações para mostrar"} 
            {profissionais && profissionais.length > 4 ? 
                <Botao href=''>Ver mais</Botao>
                : ""
            }
        </StyledCards>
    )
}