import styled from "styled-components";

const StyledFooter = styled.footer`
    
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    background-color: ${props => props.theme.primaries.darkBlue};
    padding: 36px;
    p{
        color: ${props => props.theme.secondaries.white}
    }
    div{
        display: flex;
        gap: 20px;
    }
`

export default function Footer(){
    return(
        <StyledFooter>
            <div>
                <img src="/img/facebook.png" alt="Logo do Facebook" />
                <img src="/img/whatsapp.png" alt="Logo do Whatsapp" />
                <img src="/img/google.png" alt="Logo do Google" />
                <img src="/img/instagram.png" alt="Logo do instagram" />
            </div>
            <p>2023© Desenvolvido por @arthurandrejozuk | Projeto fictício sem fins comerciais.</p>
        </StyledFooter>
    )
}