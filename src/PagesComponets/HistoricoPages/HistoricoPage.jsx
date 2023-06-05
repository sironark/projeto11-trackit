import Footer from "../../components/Footer/FooterBar";
import { NavBarr } from "../../components/Navbar/NavBar";
import {  PageContainerHabitos, PercentHabit } from "./styled";


export  function HistoricoPage(){

    return(

        <PageContainerHabitos>
        <NavBarr/>
 
             <PercentHabit>
                 <h1>Histórico</h1>
                 <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>    
             </PercentHabit>
             <Footer/>
        </PageContainerHabitos>
                 
    );
}