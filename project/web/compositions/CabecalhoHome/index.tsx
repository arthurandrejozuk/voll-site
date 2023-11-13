import styled from "styled-components";
import Logo from "@art/design-system/components/Logo";
import {AiOutlineSearch} from "react-icons/ai";
import Button from "@art/design-system/components/Button";


const Header = styled.section`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    
    .busca{
        display: flex;
        align-items: center;
        input{
            padding: 12px;
            border-radius: 12px;
            border: 1px solid ${props => props.theme.primaries.brightBlue};
        }
        input::placeholder{
            color: ${props => props.theme.primaries.brightBlue};
        }
        button{
            position: relative;
            right: 60px;
            background-color: ${props => props.theme.secondaries.white};
            border: none;
            cursor: pointer;
            top: 2px;
            color: ${props => props.theme.primaries.darkBlue};
        }
    }
    div{
        display: flex;
        text-align: center;
        align-items: center; 
        justify-content: center;
        gap: 20px;
        p{
            font-size: 16px;
            font-weight: 500;
            color: ${props => props.theme.primaries.brightBlue}
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
    @media(max-width: 500px){
        p{
            display: none;
        }
    }

`

export default function CabecalhoHome(){
    return(
        <Header>
            <div>
                <Logo src={'/img/logo.png'}/>
            </div>
            <div>
                <p><a>Sobre</a></p>
                <p><a href="/cadastro">Cadastre-se</a></p>
                <div className="busca">
                    <input type="text" placeholder="Digite sua busca"/>
                    <button>
                        <AiOutlineSearch size={20}/>
                    </button>
                </div>
                <Button>Login</Button>
            </div>
        </Header>
    )
}