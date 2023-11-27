import {useState} from "react";

// Faz o metodo post na API
export default function usePost(){

    // cria variaveis para salvar e depois exportar
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState(false);
    const [resposta, setResposta] = useState("")

    // Nessa função, que segue o padrao da API e do metodo post, temos a URL: que recebe pela url quem será utilizado do tipo de dado
    // exemplo: consulta, especialista. Os dados que serão enviados e o token que é necessario na API para crição de um especialista por exemplo.
    async function cadastrarDados<T>({url, dados, token}: {url:string, dados: T, token?: string}){
       
        // inicializa um header com esse padrão
        const headers: HeadersInit = {
            "Content-Type":"application/json"
        }
        // caso token exista adiciona uma variavel de autorização no header dos dados
        if(token){
            headers['Authorization'] = `Bearer ${token}`;
        }
        // então tenta enviar o metodo post para api 
        try{
        const resposta = await fetch(`http://localhost:8080/${url}`, {
            method:"POST",
            headers,
            body: JSON.stringify(dados)
        })
        // caso funcione set true.
        setSucesso(true);
        // pega a resposta convertida.
        const respostaConvertida = await resposta.json();
        // e coloca na variavel o token da resposta convertida
        // nesse caso, precisamos do token para confirmação do login.
        setResposta(respostaConvertida.token);
        
       } catch (erro) {
            setErro("Não foi possível enviar os dados")
       }
    }

    return{cadastrarDados, sucesso, erro, resposta};
}