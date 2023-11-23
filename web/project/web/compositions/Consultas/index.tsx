import styled from "styled-components";
import IConsulta from "../../types/IConsultas";

const StyledTables = styled.table`

    width: 100%;
    padding: 8px;
    background-color: rgba(255, 255, 255, 0.50);
    
    th{
        text-align: start;
        font-size: 18px;
        color: ${props => props.theme.primaries.darkBlue};
        padding-bottom: 16px;
        padding-right: 8px ;
        padding-left: 8px ;
    }
    td{
        text-align: start;
        color: ${props => props.theme.secondaries.gray};
        padding-left: 8px ;
        padding-bottom: 8px;
    }
`

export default function Consultas({ consultas }: { consultas: IConsulta[] | null }) {
    return (
        <StyledTables>
            <thead>
                <th>Data</th>
                <th>Horario</th>
                <th>Profissional</th>
                <th>Especialidade</th>
                <th>Paciente</th>
                <th>Modalidade</th>
            </thead>
            <tbody>
                    {consultas?.map(consulta => {
                        return (
                            <tr>
                                <td>
                                    {consulta.data}
                                </td>
                                <td>
                                    {consulta.horario}
                                </td>
                                <td>
                                    {consulta.profissional[0].nome}
                                </td>
                                <td>
                                    {consulta.profissional[0].especialidade}
                                </td>
                                <td>
                                    {consulta.paciente}
                                </td>
                                <td>
                                    {consulta.modalidade}
                                </td>
                            </tr>
                        )
                    })}     
            </tbody>
        </StyledTables>

    )
}