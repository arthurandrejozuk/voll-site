import styled from "styled-components";
import Label from "@art/design-system/components/Label";
import Logo from "@art/design-system/components/Logo"
import Button from "@art/design-system/components/Button";

const LabelsStyled = styled.div`
    
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    align-items: center;
    justify-content: start;
    width: 60%;
    height: 100vh;
    gap: 24px;
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            margin-top: 24px;
            width: 180px;
        }
    }
    h1{
        margin-top: 80px;
        color:#6B6E71;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .esqueceu,.cadastro{
        color: ${props => props.theme.primaries.brightBlue}
    }
    .esqueceu:hover, .cadastro:hover{
        color: ${props => props.theme.primaries.midBlue}
    }
    @media(max-width:500px){
        width: 100%;
    }
`

export default function LabelsLogin(){
    return(
        <LabelsStyled>
            <section>
                <Logo src={"img/logo.png"}/>
                <h1>Faça login em sua conta</h1>
            </section>
            <Label name={"email"} placeholder={"Insira seu endereço de email"} >
                Email
            </Label>
            <Label name={"senha"} placeholder={"Insira sua senha"} >
                Senha
            </Label>
            <Button>Entrar</Button>
            <a className="esqueceu" href="">Esqueceu a senha?</a>
            <p>Ainda não tem conta? <a className="cadastro" href="/cadastro">Faça seu cadastro!</a></p>
        </LabelsStyled>
    )
}