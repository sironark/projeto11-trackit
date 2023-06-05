import { useNavigate } from "react-router-dom";
import { MenuBottom } from "./styled";


export default function Footer(){
    const navigate = useNavigate()
   
    return(
            <MenuBottom data-test="menu">
                <button data-test="habit-link" onClick={()=> navigate('/habitos')}>Hábitos</button>
                <button  data-test="today-link" onClick={() => navigate('/hoje')}>Hoje</button>
                <button data-test="history-link" onClick={()=> navigate('/historico')} >Histórico</button>
            </MenuBottom>
    );
}