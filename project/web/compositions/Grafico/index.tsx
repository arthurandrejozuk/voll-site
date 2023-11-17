import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsultas";
import useDadosGrafico from "./useDadosGrafico";
import styled from "styled-components";

interface Props {
    profissionais: IProfissional[] | null,
    consultas: IConsulta[] | null,
}
interface IDados {
    nome: string,
    
}

const SectionStyled = styled.section`
    background-color: white;
    border-radius: 16px;
`

export default function Grafico({profissionais, consultas}:Props){

    let dados: Array<IDados> = useDadosGrafico({profissionais, consultas})

    return(
        <SectionStyled>
        <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    layout="vertical"
                    data={dados}
                    margin={{ top: 25, right: 40, left: 20, bottom: 20 }}
                >
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="nome"></YAxis>
                    <Bar dataKey="consultas" fill="#19476c" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </SectionStyled>
    )
}