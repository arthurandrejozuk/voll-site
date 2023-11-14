import Cabecalho from "../compositions/Cabecalho"
import Admin from "../compositions/Admin"
import Footer from "../compositions/Footer"

export default function administracao() {
    return (
        <>
            <section>
                <Cabecalho />
                <Admin />
            </section>
            <Footer />
        </>
    )
}