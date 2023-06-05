import { Link, useNavigate } from "react-router-dom";
import { MenuBottom } from "./styled";
import { CircularProgressbar } from "react-circular-progressbar";
import { useContext } from "react";
import UserContext from "../Context/UseContext";

export default function Footer(){
    const navigate = useNavigate()
    const {progresso, numeroArr} = useContext(UserContext)
   
    return(
            <MenuBottom data-test="menu">
                <button data-test="habit-link" onClick={()=> navigate('/habitos')}>Hábitos</button>

                <Link  data-test="today-link" to={'/hoje'}
                 >
                    <CircularProgressbar
                        className="progress-bar"
                        value={(progresso/numeroArr)*100}
                        text={"Hoje"}
                        background={true}
                        backgroundPadding={6}
                        styles={{
                                background:{
                                    fill:'#52b6ff'
                                },
                                text:{
                                    fill: '#fff',
                                    fontSize: '18px',
                                    textAlign: 'center',
                                    justifyContent: 'center'
                                },
                                path:{
                                    stroke: '#fff',
                                    strokeLinecap:'round'
                                }
                        }}
                        
                /></Link>
                <button data-test="history-link" onClick={()=> navigate('/historico')} >Histórico</button>
            </MenuBottom>
    );
}