import styled from "styled-components";
import Logo from "@art/design-system/components/Logo";


const Header = styled.section`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom:24px;
    div{
        display: flex;
        text-align: center;
        align-items: center; 
        gap: 36px;
        p{
            font-size: 16px;
            font-weight: 700;
            color: ${props => props.theme.primaries.darkBlue}
        }
        .perfil{
            width: 56px;
            height: 56px;
        }
        img:hover{
            cursor: pointer;
        }
        p:hover{
            cursor: pointer;
        }
    }

`

export default function Cabecalho(){
    return(
        <Header>
            <div>
                <a href="/"><Logo src={'/img/logo.png'}/></a>
            </div>
            <div>
                <img className="perfil" src="/img/perfil.png" alt="imagem de perfil de cadastro" />
                <p><a href="">Sair</a></p>
            </div>      
        </Header>
    )
}