import styled from "styled-components";
import Background from "@art/design-system/components/Background";
import LabelsLogin from "../compositions/LabelsLogin";

const LoginStyled = styled.div`
    
    display: flex;
    justify-content: center;
    
`

export default function Login(){
    return(
        <Background >
            <LoginStyled>
                <LabelsLogin/>
            </LoginStyled>
        </Background >
    )
}