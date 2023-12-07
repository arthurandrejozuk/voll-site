import styled from "styled-components";
import Button from "@art/design-system/components/Button"
import Title from "@art/design-system/components/Title";
import Consultas from "../Consultas";
import Cards from "../Cards";
import Grafico from "../Grafico";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsultas";

const AdminStyled = styled.section`
    
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    background-color:#E7EBEF;
    border-radius: 12px;
    .desc{
        display: flex;
        gap: 4px;
    }
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
        
        gap: 6px;
        img{
            width: 20px;
        }
    }
    .section__consultas__tabela{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: start;
        align-items: start;
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



interface Props {
    profissionais: IProfissional[] | null;
    consultas: IConsulta[] | null;
    button: React.ReactNode;
}


export default function Admin({consultas, profissionais, button}:Props){
    return(
        <AdminStyled >
            <section>
                <Title>Área administrativa</Title>
                {button}
            </section>
            <section className="section__consultas__tabela">
                <div className="desc">
                    <img src="/img/consulta.png" alt="" />
                    <Title>Consultas do dia</Title>
                </div>
                <Consultas consultas={consultas}/>
            </section>
            <section>
                <Button href="/">Ver mais</Button>
            </section>
            <section className="section__consultas__tabela">
                <div className="desc">
                    <img src="/img/grafico.png" alt="" />
                    <Title>Consultas mensais por especialista</Title>
                </div>
                <Grafico consultas={consultas} profissionais={profissionais}/>
            </section>
            <section className="section__consultas__especialista">
                <div className="desc">
                    <img src="/img/avaliacao.png" alt="" />
                    <Title>Avaliações de especialista</Title>
                </div>
            </section>
            <section className="section__consultas__especialista"> 
                <Cards/>
            </section>
            
        </AdminStyled>
    )
}