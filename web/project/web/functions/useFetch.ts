import { useEffect, useState } from "react";
    // useFetch recebe uma url para determinar a informação do correta do banco,
    // useFetch é uma função que ainda não está sendo acionada, somente funcionará em outras funções que veremos.
export default function useFetch<T>({ url }: { url: string }) {
    //Aqui serão guardados os dados da API
    const [dados, setDados] = useState<T | null>(null);
    const [erro, setErro] = useState("");
    // useEffect para chamar o fetch antes da pagina 
    useEffect(() => {
        // Pega o endereço.
        fetch(`http://localhost:8080/${url}`)
        // Tranforma a resposta em JSON
            .then(resposta => resposta.json())
        // Envia dados tranformado em json para dados(nossa const)
            .then(dados => setDados(dados))
        // caso tenha um erro ao capturar a api
            .catch((erro) => {
                setErro(erro.message); // You might want to use erro.message to get a more descriptive error message
            });
        // Recebe a variavel para verificar caso a mude, se mudar, recarrega o useEffect
    }, [url]);

    return { dados, erro };
}