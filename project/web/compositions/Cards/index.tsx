import styled from 'styled-components';
import Card from "@art/design-system/components/Card"
import useDadosProfissional from '../../functions/useDadosProfissionais';

const StyledCards = styled.div`
    
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    
`


export default function Cards(){

    let profissionais = useDadosProfissional().dados;

    return(
        <StyledCards>

            {profissionais?.map((profissional) => {
                return(
                    <Card 
                            area={profissional.especialidade} 
                            doutores={profissional.nome}
                            imagem={profissional.imagem}
                            avaliacao={profissional.nota}
                    />
                )
            })}
        </StyledCards>
    )
}