import styled from "styled-components";
import Label from "@art/design-system/components/Label";
import Logo from "@art/design-system/components/Logo"
import Button from "@art/design-system/components/Button";
import { useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import IClinica from "../../types/IClinica";
import usePost from "../../functions/usePost";
import { useRouter } from "next/router";

const LabelsStyled = styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        justify-content: center;
        width: 100%;
    }
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
        padding-bottom:32px ;
        img{
            margin-top: 0px;
            width: 180px;
        }
    }
`
interface PropsCustomizadas {
    cor: string
}
const StepCustomizada = styled.div<PropsCustomizadas>`
    background-color: ${({cor})=> cor};
    width: 16px;
    height: 16px;
    border-radius: 50%;
`

export default function LabelsCadastro(){
    
    const [etapaAtiva, setEtapaAtiva] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [senhaVerificada, setSenhaVerificada] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [estado, setEstado] = useState('');
    // pega os dados do usePost
    const {cadastrarDados, erro, sucesso} = usePost();
    const router = useRouter();
    // criamos uma função para o submit do formulario 

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(etapaAtiva)
        // criamos uma const que recebe dados do Tipo IClinica
        // as variaveis recebem variaveis do useState acima.
        const clinica:IClinica = {
            nome:nome,
            email:email,
            senha:senha,
            endereco: {
                cep:cep,
                rua:rua,
                numero:numero,
                complemento:complemento,
                estado:estado
            }
        }
        // se no submit etapa for diferente de 0 ele tenta cadastrar
        // caso ainda esteja ele adiciona 1 na etapaAtiva
        if(etapaAtiva !== 0){
            try{
                // os dados são os acima que nós criamos.
                cadastrarDados({url: "clinica", dados: clinica});
                //dai nos leva para area de login
                router.push("/login");
            } catch(erro){
                erro && alert("Erro ao cadastrar os dados");
            }
        }
        setEtapaAtiva(etapaAtiva + 1);
        
    }
        console.log(etapaAtiva);
    return(
        <LabelsStyled>
            <section>
                <Logo src={"img/logo.png"}/>
            </section>
        <Stepper activeStep={etapaAtiva}>
                <Step>
                    <StepLabel
                        StepIconComponent={(props) => (
                            <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                        )}
                    />
                </Step>
                <Step>
                    <StepLabel
                        StepIconComponent={(props) => (
                            <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                        )}
                    />
                </Step>
            </Stepper>
        {etapaAtiva === 0 ? (
            
        <form onSubmit={handleSubmit}>
            <section>
                <h1>Faça seu Cadastro</h1>
            </section>
            <Label onChange={setNome} type="text" value={nome} name={"nome"} placeholder={"Digite seu nome"} >
                Nome
            </Label>
            <Label onChange={setCnpj} type="text" value={cnpj} name={"cnpj"} placeholder={"Digite o CNPJ"} >
               Cnpj
            </Label>
            <Label onChange={setEmail} type="email" value={email} name={"email"} placeholder={"Insira seu endereço de email"} >
                Email
            </Label>
            <Label onChange={setSenha} type="password" value={senha} name={"senha"} placeholder={"Insira sua senha"} >
                Crie uma senha
            </Label>
            <Label onChange={setSenhaVerificada}  type="password" value={senhaVerificada} name={"senha"} placeholder={"Confirme sua senha"} >
                Confirme a senha
            </Label>
            <Button type="submit">Continuar</Button>
        </form>
           
            ):( 
            <form onSubmit={handleSubmit}>
            <section>
                <h1>Faça login em sua conta</h1>
            </section>
            <Label type="tel" onChange={setTelefone} value={telefone} name={"telefone"} placeholder={"Insira seu telefone"} >
                Telefone
            </Label>
            <Label type="number" onChange={setCep} value={cep} name={"cep"} placeholder={"Insira seu cep"} >
                CEP
            </Label>
            <Label type="text" onChange={setRua} value={rua} name={"rua"} placeholder={"Insira sua rua"} >
                Rua
            </Label>
           
                <Label type="number" onChange={setNumero} value={numero} name={"numero"} placeholder={"Insira seu Número de endereço"} >
                    Número
                </Label>
                <Label type="text" onChange={setComplemento} value={complemento} name={"complemento"} placeholder={"complemento"} >
                    Complemento
                </Label>
                <Label type="text" onChange={setEstado} value={estado} name={"estado"} placeholder={"Estado"} >
                    Estado
                </Label>
            
            <Button type="submit" >Cadastrar</Button>
            </form>
            )
        }
        </LabelsStyled>
    )
}