import Cabecalho from "../compositions/Cabecalho";
import Admin from "../compositions/Admin";
import Footer from "../compositions/Footer";
import useDadosConsulta from "../functions/useDadosConsulta";
import useDadosProfissional from "../functions/useDadosProfissionais";
import RotaPrivada from "../compositions/RotaPrivada";
import ModalEspecialista from "../compositions/Modal";
import Button from "@mui/material/Button"
import { useState } from "react";

export default function administracao() {

    const {dados: consultas, erro: consultasErro} = useDadosConsulta();
    const {dados: profissionais, erro: profissionaisErro} = useDadosProfissional();

    if(consultasErro || profissionaisErro){
        console.log("Ocorreu um erro na requisição");
    }
   
    const [open, setOpen] = useState(false);

    function handleOpen(){
        open ? setOpen(false) : setOpen(true);
    }

    return (
        <RotaPrivada>
            <ModalEspecialista handleChange={handleOpen} open={open} />
            <section>
                <Cabecalho />
                <Admin 
                    button={<Button 
                    style={{
                            backgroundColor:`#0B3B60`,
                            color:`white`,
                            maxWidth: `400px`,
                            width:` fit-content`,
                            padding: `12px 16px`,
                            borderRadius: `8px`,
                            fontSize:` 16px`,
                            fontWeight:`600`,
                        }} 
                    onClick={handleOpen}>Cadastrar especialista</Button>}
                    consultas={consultas}
                    profissionais={profissionais}
                />
            </section>
            <Footer />
        </RotaPrivada>
    )
}