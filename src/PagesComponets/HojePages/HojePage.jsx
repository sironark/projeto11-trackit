import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/FooterBar";
import { NavBarr } from "../../components/Navbar/NavBar";
import { ListaHabitos, PageContainerHabitos, PercentHabit, SCli } from "./styled";
import axios from "axios";
import dayjs from "dayjs";
import UserContext from "../../components/Context/UseContext";
import { useNavigate } from "react-router-dom";



export function HojePage(){
    const {user} = useContext(UserContext)
    const navigate = useNavigate();
    const RAW_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"
    
    const header = {
        headers: {Authorization: `Bearer ${user.token}`}, 
        baseURL: RAW_URL}
    const [diaSemana, setDiaSemana] = useState('')
    const [dataMes, setDataMes] = useState('')
    const [arrHabitos, setArrHabitos] = useState([]);
    const [arrChecked, setArrChecked] = useState([]);
    
useEffect(()=> {

    console.log(user)
    const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', header)

    promisse.then((resposta) => {
        const aux = (resposta.data)
        setArrHabitos(aux)     
        getInfoHabit(aux)
        checarSequencia(aux)
        })
    promisse.catch((erro) => console.log(erro.response.data.message));
        
    
},[]);

function checarSequencia(aux){
    console.log (aux)

}

function getInfoHabit(array){

    console.log(array)

        if(dayjs().$W == 0){
            setDiaSemana("Domingo")
        } else if(dayjs().$W == 1){
            setDiaSemana("Segunda")
        }else if(dayjs().$W == 2){
            setDiaSemana("Terça")
        }else if(dayjs().$W == 3){
            setDiaSemana("Quarta")
        }else if(dayjs().$W == 4){
            setDiaSemana("Quinta")
        }else if(dayjs().$W == 5){
            setDiaSemana("Sexta")
        }else if(dayjs().$W == 6){
            setDiaSemana("Sábado")
        }
    
    setDataMes(dayjs().format('DD/MM'))
}

function checkHabit(habito){
    console.log(habito.id)
    const aux = [...arrChecked, habito.id]
    setArrChecked(aux)
    console.log(aux)


    const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`, null, header);
    promisse.then((resposta) => {
        console.log(resposta.data);
        navigate('/hoje')
    })
    promisse.catch((erro) => {
    
        if(erro.response.status == 400){
            
            const promessa = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`, null, header)
            
            promessa.then((resposta) => {
            
                const indexof = arrChecked.indexOf(habito.id)
                const aux1 = [...arrChecked]
                aux1.splice(indexof, 1)
                setArrChecked(aux1)
            console.log(resposta)})

            promessa.catch((erro) => console.log(erro.response.data.message))
        }

    })
    

}

return(
    <PageContainerHabitos>
       <NavBarr />

            <PercentHabit>
                <h1 data-test="today">{diaSemana}, {dataMes}</h1>
                <h3 data-test="today-counter" >Nenhum hábito concluído ainda</h3>    
            </PercentHabit>

            <ListaHabitos >
                {arrHabitos.map((habito, indice)=>(
                        <SCli   data-test="today-habit-container"
                                key={indice}
                                arrChecked = {arrChecked}
                                idHabito = {habito.id}
                                doneHabito ={habito.done}
                                currentSequence = {habito.currentSequence}
                                highestSequence = {habito.highestSequence}
                        >
                            <p data-test="today-habit-name">{habito.name}</p>
                            <div>
                                <ul data-test="today-habit-sequence" >Sequência atual: <h4>{habito.currentSequence} dias</h4></ul>
                                <ul data-test="today-habit-record" >Seu recorde: <h5>{habito.highestSequence} dias</h5></ul>
                            </div>
                            <span>
                            <img data-test="today-habit-check-btn" src="/src/assets/check.svg" alt="check" onClick={() => checkHabit(habito, indice)}/>
                            </span>
                        </SCli>
                      ))}
            </ListaHabitos>



        <Footer />
    </PageContainerHabitos>
);
}