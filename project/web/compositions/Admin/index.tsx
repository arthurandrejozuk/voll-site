import styled from "styled-components";
import Button from "@art/design-system/components/Button"
import Title from "@art/design-system/components/Title";
import Consultas from "../Consultas";
import Cards from "../Cards";
const AdminStyled = styled.section`
    
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    background-color:#E7EBEF;
    border-radius: 12px;
    section{
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 100%;
    }
    .section__consultas{
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        gap: 6px;
        img{
            width: 20px;
        }
    }
    .section__consultas__especialista{
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        gap: 6px;
        img{
            width: 20px;
        }
    }
`


export default function Admin(){
    return(
        <AdminStyled >
            <section>
                <Title>Área administrativa</Title>
                <Button>Cadastrar especialista</Button>
            </section>
            <section className="section__consultas">
                <img src="/img/consulta.png" alt="" />
                <Title>Consultas do dia</Title>
            </section>
            <section>
                <Consultas/>
                <Button>Ver mais</Button>
            </section>
            <section className="section__consultas">
                <img src="/img/grafico.png" alt="" />
                <Title>Consultas mensais por especialista</Title>
            </section>
            <section className="section__consultas__especialista">
                <img src="/img/avaliacao.png" alt="" />
                <Title>Avaliações de especialista</Title>
                
            </section>
            <section className="section__consultas__especialista"> 
               
                <Cards/>
                
            </section>
            
        </AdminStyled>
    )
}