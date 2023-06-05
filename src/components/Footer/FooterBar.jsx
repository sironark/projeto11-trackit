import { useNavigate } from "react-router-dom";
import { MenuBottom } from "./styled";


export default function Footer(){
    const navigate = useNavigate()
    return(
            <MenuBottom>
                <button onClick={()=> navigate('/habitos')}>Hábitos</button>
                <button onClick={() => navigate('/hoje')}>Hoje</button>
                <button>Histórico</button>
            </MenuBottom>
    );
}