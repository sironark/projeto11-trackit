import { useNavigate } from "react-router-dom";
import { PageContainer } from "./styled";
import { useState } from "react";
import axios from "axios";


export default function LoginPage(){
//const navigate = useNavigate();
const [desabilitar, setDesabilitar] = useState(false)
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


    function rota1(e){
        //navigate()

        const URL_LOG = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

        const obj = {
            email: email,
	        password: password
        }

        const promisse = axios.post()

    }


    return(
        <PageContainer>
            <img src="src/assets/WhatsApp Image 2023-05-30 at 17.00.05.jpeg" alt="foto" />
            <form onSubmit={rota1}>
                <input disabled={desabilitar} placeholder="email" onChange={(e) => }/>

                <input disabled={desabilitar} placeholder="senha"/>

                <button disabled={desabilitar}>Entrar</button>
            </form>
        </PageContainer>

    );
}