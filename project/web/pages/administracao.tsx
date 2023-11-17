import Cabecalho from "../compositions/Cabecalho";
import Admin from "../compositions/Admin";
import Footer from "../compositions/Footer";
import useDadosConsulta from "../functions/useDadosConsulta";
import useDadosProfissional from "../functions/useDadosProfissionais";
export default function administracao() {

    const {dados: consultas, erro: consultasErro} = useDadosConsulta();
    const {dados: profissionais, erro: profissionaisErro} = useDadosProfissional();

    if(consultasErro || profissionaisErro){
        console.log("Ocorreu um erro na requisição");
    }

    return (
        <>
            <section>
                <Cabecalho />
                <Admin 
                    consultas={consultas}
                    profissionais={profissionais}
                />
            </section>
            <Footer />
        </>
    )
}