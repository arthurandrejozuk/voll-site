import Footer from "../compositions/Footer"
import CabecalhoHome from "../compositions/CabecalhoHome"
import BannerHome from "../compositions/Banner"
import Busca from "../compositions/Busca"
import Atividades from "../compositions/Atividades"
import Depoimentos from "../compositions/Depoimentos";

export default function Home(){
    return(
        <>
            <section>
                <CabecalhoHome/>
            </section>   
            <BannerHome/>
            <Busca/>
            <Atividades/>
            <Depoimentos/>
            <Footer/>
        </>
    )
}