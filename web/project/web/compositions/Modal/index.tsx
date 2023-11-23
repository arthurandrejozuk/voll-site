import { Modal, Button, Box, Switch, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Label from "@art/design-system/components/Label";
import { useState } from "react";
import usePost from "../../functions/usePost";
import autenticaStore from "../../stores/autentica.store";
import IProfissional from "../../types/IProfissional";



export default function ModalEspecialista({ open, handleChange }){
    const [planosSelecionados, setPlanosSelecionados] = useState<string[]>([]);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaVerificada, setSenhaVerificada] = useState("");
    const [possuiPlano, setPossuiPlano] = useState(false);
    const [imagem, setImagem] = useState('');
    const [especialidade, setEspecialidade] = useState("");
    const [crm, setCrm] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [estado, setEstado] = useState("");
    const [telefone, setTelefone] = useState("");
    const label = { inputProps: { 'aria-label': 'Atende por plano?' } };
    const {cadastrarDados} = usePost();
    const {usuario} = autenticaStore;

    const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxValue = event.target.value;
        if (event.target.checked) {
            setPlanosSelecionados([...planosSelecionados, checkboxValue]);
        } else {
            setPlanosSelecionados(planosSelecionados.filter(plano => plano !== checkboxValue));
        }
    };
    const handleSubmit =  async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const profissional: IProfissional = {
            nome: nome,
            crm: crm,
            especialidade: especialidade,
            possuiPlanoSaude: possuiPlano,
            estaAtivo: true,
            imagem: imagem,
            email: email,
            telefone: telefone,
            senha: senha,
            planoSaude: planosSelecionados,
            endereco: {
                cep: cep,
                rua: rua,
                estado: estado,
                numero: numero,
                complemento: complemento
            }
        }
        
    
        await cadastrarDados({url:'especialista', dados: profissional, token: usuario.token})
    }

    return(
        <>
            <Modal style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                width:`100%`,
            }} open={open}>
            <form onSubmit={handleSubmit} style={
                {
                    backgroundColor:'#e6e6e6',
                    width: '60%',
                    display: `flex`,
                    flexDirection: 'column',
                    alignItems: `center`,
                    height: '100%',
                    maxHeight:` 98vh`,
                    overflowY: `auto`,    
                    justifyContent: `center`,
                    borderRadius: `12px`,
                    padding: `12px`,
                    gap: `12px`,
                    paddingBottom: `36px`,
                    paddingTop: `42px`,
                    
                }
        }>
            
                <Button className="button" style={{
                    backgroundColor: "#0B3B60",
                    color:"white",
                    alignSelf: 'end',
                    
                    }} onClick={handleChange}>X</Button>
                    <p style={
                        {
                            color:`#0B3B60`,
                            fontWeight:`600`
                        }
                }>Cadastre  o especialista inserindo os dados abaixo:</p>
                <Label  type="text" value={nome} onChange={setNome} name="nome" placeholder="Digite o nome completo">
                    Nome
                </Label>
                <Label  type="email" value={email} onChange={setEmail} name="email" placeholder="Digite o email">
                    Email
                </Label>
                <Label  type="password" value={senha} onChange={setSenha} name="senha" placeholder="Nova senha">
                    Crie uma senha
                </Label>
                <Label  type="password" value={senhaVerificada} onChange={setSenhaVerificada} name="senha" placeholder="Digite a senha">
                    Repita a senha
                </Label>
                <Label  type="text" value={especialidade} onChange={setEspecialidade} name="especialidade" placeholder="Especialidade">
                    Especialidade
                </Label>
                <Label  type="text" value={crm} onChange={setCrm} name="crm" placeholder="Digite o CRM">
                    CRM
                </Label>
                <Label  type="tel" value={telefone} onChange={setTelefone} name="telefone" placeholder="(DDD)xxxxx-xxxx">
                    Telefone
                </Label>
                <Label  type="text" value={imagem} onChange={setImagem} name="imagem" placeholder="https://img/...">
                    Insira a URL da imagem
                </Label>
                <p style={{
                                textAlign: `center`,
                                color:`#0B3B60`,
                                fontWeight:`600`
                            }}>Possui plano?</p>
                    <Switch {...label} onChange={() => {
                        possuiPlano ? 
                        setPossuiPlano(false):
                        setPossuiPlano(true)
                    }}/>
                        {possuiPlano ? <div>
                           
                     <p style={{
                                textAlign: `center`,
                                color:`#0B3B60`,
                                fontWeight:`600`
                            }}>Selecione os planos:</p>
                            <FormGroup style={{display: `flex`, flexDirection: `row`, alignItems:`center`, justifyContent:`center`}}>
                                    <FormControlLabel control={<Checkbox onChange={handleSwitch} value="Sulamerica" />} label="Sulamerica" />
                                    <FormControlLabel control={<Checkbox onChange={handleSwitch} value="Unimed" />} label="Unimed" />
                                    <FormControlLabel control={<Checkbox onChange={handleSwitch} value="Bradesco" />} label="Bradesco" />
                                    <FormControlLabel control={<Checkbox onChange={handleSwitch} value="Amil" />} label="Amil" />
                                    <FormControlLabel control={<Checkbox onChange={handleSwitch} value="Biosaúde" />} label="Biosaúde" />
                                    <FormControlLabel control={<Checkbox onChange={handleSwitch} value="Biovida" />} label="Biovida" />
                                    <FormControlLabel control={<Checkbox onChange={handleSwitch} value="Outro" />} label="Outro" />
                                </FormGroup>
                        </div> : <></>}
                    
                
                <Button type="submit" style={
                    {backgroundColor: `#0B3B60`, color:`white`}
            }>Cadastrar</Button>
            </form>
            </Modal>
        </>
    )
}