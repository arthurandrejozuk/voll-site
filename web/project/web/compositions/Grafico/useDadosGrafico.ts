import IConsulta from "../../types/IConsultas";
import IProfissional from "../../types/IProfissional";

interface Props {
    profissionais: IProfissional[] | null;
    consultas: IConsulta[] | null;
}

interface IDados {
    nome: string,
    consultas: number,
}


const useDadosGrafico = ({profissionais, consultas}:Props) => {
    let dados: Array<IDados> = [];
    if(profissionais && profissionais.length && consultas){
        dados = profissionais.map((profissional) => ({
                nome: profissional.nome,
                consultas: consultas.filter((consulta) => {
                    return consulta.profissional.some((prof) => prof.nome === profissional.nome)
                }).length
        }))
    }
    return dados;
}

export default useDadosGrafico;