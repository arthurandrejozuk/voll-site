import styled from "styled-components";
import Pesquisa from "@art/design-system/components/Pesquisa";
import {AiOutlineSearch} from "react-icons/ai";
import {FaLocationDot} from "react-icons/fa6";
import {TiDelete} from "react-icons/ti";
import Recomendados from "@art/design-system/components/Recomendados";
import Button from "@art/design-system/components/Button";

const StyledBusca = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 500px){
    display: flex;
    width: 95%;
    padding: 8px ;
    flex-direction: column;
    align-items: center;

   }
   button{
     width: 100%;
   }
`
const AreaBusca = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: #686868;
    padding-bottom: 32px;
    margin-bottom: 24px;
    border-radius: 8px;
    background: var(--pb-white, #FFF);
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.15);
    div{
        gap:20px
    }
 
    .recomendados{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
      
    }
    
    @media(max-width: 500px){
        margin: 32px;
        
        h3{
            padding-left: 32px;
        };
   }
 
`

export default function Busca(){
    return(
        <AreaBusca>
            <StyledBusca>
            <Pesquisa children={<AiOutlineSearch size={16}/>} placeholder={"Digite a especialidade"}/>
            <Pesquisa children={<FaLocationDot size={16}/>} placeholder={"Digite a sua localização"}/>
            <Button>Buscar</Button>
            </StyledBusca>
            <div className="recomendados">
                <h3>Você pode estar procurando por estas categorias:</h3>
                <Recomendados button={<TiDelete size={20}/>}>Neurologista</Recomendados>
                <Recomendados button={<TiDelete size={20}/>}>Dermatologista</Recomendados>
                <Recomendados button={<TiDelete size={20}/>}>Cardiologista</Recomendados>
                <Recomendados button={<TiDelete size={20}/>}>Ortopedista</Recomendados>
            </div>
       </AreaBusca>
    )
}