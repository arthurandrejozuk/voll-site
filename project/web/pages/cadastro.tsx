import styled from "styled-components";
import Background from "@art/design-system/components/Background";
import LabelsCadastro from "../compositions/LabelsCadastro";

const CadastroStyled = styled.div`
    
    display: flex;
    justify-content: center;
`


export default function Cadastro(){
    return(
         < Background >
            <CadastroStyled>
                <LabelsCadastro/>
            </CadastroStyled>
        </ Background >
    )
}