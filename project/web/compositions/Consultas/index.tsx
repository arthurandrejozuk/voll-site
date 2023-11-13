import styled from "styled-components";

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
    }
    

    

`

export default function Consultas() {
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
                <tr>
                    <td>
                        08/01/23
                    </td>
                    <td>
                       09:00
                    </td>
                    <td>
                        Dra.Ana Lúcia
                    </td>
                    <td>
                        Angiologista
                    </td>
                    <td>
                        Luana Malheiros
                    </td>
                    <td>
                        Particular
                    </td>
                </tr>
            </tbody>
        </StyledTables>

    )
}