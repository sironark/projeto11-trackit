import { AddHabitos, AvisoHabitos, ConfigAdd, ListaHabitos,  PageContainerHabitos, SCMapLi,  SCli, SCul } from "./styled";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { NavBarr } from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/FooterBar";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../components/Context/UseContext";
import { useNavigate } from "react-router-dom";





export default function HabitosPage(){
    const arrSem = ['D','S','T','Q','Q','S','S'];
    const [expHadicionar, setExpAdicionar] = useState(false);
    const [nomeHabito, setNomeHabito] = useState("");
    const [arrDiaSemana, setArrDiaSemana] = useState([]);
    const [desabilitar, setDesabilitar] = useState(false)
    
    const URL_Post = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"    
    const RAW_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"
    const arrNumSemana = [0,1,2,3,4,5,6]
    const [meusHabitos, setMeusHabitos] = useState([]);
    const {user} = useContext(UserContext)
   const navigate = useNavigate()

    useEffect( () => {

        
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {headers: {Authorization: `Bearer ${user.token}`}, 
        baseURL: RAW_URL});

        promisse.then((resposta) => {
            console.log(resposta.data)
            setMeusHabitos(resposta.data)
            
        })
        promisse.catch((erro) =>{
            console.log(erro.reponse.data.messege)
        })
    },[]);

    
    function adicionarHabito(){
        setExpAdicionar(true);
    }

    function addSemana(dia, index){
        let arr = [...arrDiaSemana,index]
        setArrDiaSemana(arr)
        }

    function salvarHabito(e){
            e.preventDefault()
            console.log(nomeHabito)
            console.log(arrDiaSemana)
            setDesabilitar(true)
            


            

        const obj = 
        {
            name: nomeHabito,
            days: arrDiaSemana
        }
    
      
        axios.create({   
            headers: {Authorization: `Bearer ${user.token}`}, 
            baseURL: RAW_URL, 
        })
        
        .post(URL_Post, obj)
        .then((res) => {
            console.log(res.data)
            setDesabilitar(false)
            
            navigate('/habitos')
            
        })
        .catch((err) => {
            alert(err.reponse.data.messege)
            setDesabilitar(false)

        })

    }

    function Deletar(idHabito){
      const confirmar = confirm("Deseja realmente deletar?")
        
      if(confirmar){
     const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`,{headers: {Authorization: `Bearer ${user.token}`}, 
        baseURL: RAW_URL})
    promisse.then( (resposta) => {
        
        console.log(resposta)})
    promisse.catch((erro) => console.log(erro.response.data.message));
      }
    }

    return(
        <PageContainerHabitos>

           <NavBarr/>

            <AddHabitos>
                <p>Meus hábitos</p>
                <button  data-test="habit-create-btn" onClick={adicionarHabito}><p>+</p></button>
            </AddHabitos>

            <ConfigAdd onSubmit={salvarHabito} 
            
            expHadicionar = {expHadicionar}
            data-test="habit-create-container">
                <input required data-test="habit-name-input" disabled={desabilitar} placeholder="nome do hábito" onChange={(e) => setNomeHabito(e.target.value)}/>
                
                <SCul>
                    {arrSem.map((dia, index )=>(

                        <SCli data-test="habit-day" 
                        disabled={desabilitar}
                        key={index} 
                        arrDiaSemana ={arrDiaSemana}
                        index = {index}
                    
                        onClick={()=> addSemana(dia, index)}
                        >
                            {dia}
                        </SCli>
                    ))}
                </SCul>

                <span>
                <p data-test="habit-create-cancel-btn" onClick={()=> setExpAdicionar(false)}>Cancelar</p>
                <button data-test="habit-create-save-btn"  disabled={desabilitar} type="submit" >{desabilitar ? <ThreeDots type="ThreeDots" color="#fff" height={20} width={40}  /> : "Salvar"}</button>
                </span>

            </ConfigAdd>
                        {meusHabitos.length == 0 &&
            <AvisoHabitos >
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </AvisoHabitos>
                        }

                        {meusHabitos.length >0 &&
            <ListaHabitos>
                        {meusHabitos.map((habito, index) => (
                        <li data-test="habit-container"
                        key={index}>
                            <p data-test="habit-name">{habito.name}</p>
                            <div>
                                {arrSem.map((dia, i )=>(
                                    <SCMapLi data-test="habit-day" 
                                    key={i}
                                    meusHabitos = {habito.days}
                                    index = {i}
                                    diaSemana = {arrNumSemana}                                    
                                    >
                                        {dia}
                                    </SCMapLi>
                                ))}
                            </div>
                            <img data-test="habit-delete-btn"  src="/src/assets/dump.svg" alt="trash" onClick={()=>Deletar((habito.id))}/>
                        </li>
                        ))}
            </ListaHabitos>
                        }
            <Footer/>
        </PageContainerHabitos>
    );
}
