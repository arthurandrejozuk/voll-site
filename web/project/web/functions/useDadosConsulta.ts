import IConsulta from "../types/IConsultas"
import useFetch from "./useFetch"

const useDadosConsulta = () => {
    // faz todo aquilo que escrevemos no codigo do useFetch, 
    // porém adiciona a url consultas
    return useFetch<IConsulta[]>({url: "consulta"})
}

export default useDadosConsulta;