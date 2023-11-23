
import IProfissional from "../types/IProfissional";
import useFetch from "./useFetch"

const useDadosProfissional = () => {
    // faz todo aquilo que escrevemos no codigo do useFetch, 
    // porém adiciona a url profissionais
    return useFetch<IProfissional[]>({url: "especialista"})
}

export default useDadosProfissional;