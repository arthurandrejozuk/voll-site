import styled from "styled-components";
import Label from "@art/design-system/components/Label";
import Logo from "@art/design-system/components/Logo"
import Button from "@art/design-system/components/Button";
import { useState } from "react";
import usePost from "../../functions/usePost";
import autenticaStore from "../../stores/autentica.store";
import { useRouter } from "next/router";

const LabelsStyled = styled.form`
    
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
  
    div{
        text-align: center;
    }
    .esqueceu,.cadastro{
        color: ${props => props.theme.primaries.brightBlue}
    }
    .esqueceu:hover, .cadastro:hover{
        color: ${props => props.theme.primaries.midBlue}
    }
    @media(max-width:500px){
        width: 100%;
        div{
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 12px;
        }
    }
`
interface ILogin {
    email: string,
    senha: string
}

export default function LabelsLogin(){

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    // aqui, a diferença é que pegaremos a resposta, pois nos retorna um ID necessario para logar
    const {cadastrarDados, erro , sucesso, resposta} = usePost();
    const router = useRouter();

    const handleLogin = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const usuario: ILogin = {
            email: email,
            senha: senha
        }
        try{
            // mudamos a URL para area de login e autorização da API.
            cadastrarDados({url: "auth/login", dados: usuario});
            // se resposta e email existem, eles são autenticados. 
            autenticaStore.login({email: email, token: resposta});
            // se resposta existe, retorna para area de administração
            resposta && router.push("/administracao");
        } catch(erro){
            erro && alert("Não foi possível fazer login");
        }
    }

    return(
        <LabelsStyled onSubmit={handleLogin}>
            <section>
                <Logo src={"img/logo.png"}/>
                <h1>Faça login em sua conta</h1>
            </section>
            <Label onChange={setEmail} name={"email"} value={email} placeholder={"Insira seu endereço de email"} >
                Email
            </Label>
            <Label type="password" onChange={setSenha} name={"senha"} value={senha} placeholder={"Insira sua senha"} >
                Senha
            </Label>
            <Button type="submit">Entrar</Button>
            <div>
                <a className="esqueceu" href="">Esqueceu a senha?</a>
                <p>Ainda não tem conta? <a className="cadastro" href="/cadastro">Faça seu cadastro!</a></p>
            </div>
        </LabelsStyled>
    )
}