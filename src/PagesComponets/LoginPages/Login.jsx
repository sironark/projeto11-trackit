import { Link, useNavigate } from "react-router-dom";
import { PageContainer } from "./styled";
import { useState } from "react";
import axios from "axios";


export default function LoginPage(){
const navigate = useNavigate();
const [desabilitar, setDesabilitar] = useState(false)
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


    function rota1(e){
        
        e.preventDefault();

        const URL_LOG = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

        const obj = {email: email,
            password: password};



        
        const aux = true
        setDesabilitar(aux)
        const promisse = axios.post(URL_LOG, obj)

        promisse.then(resposta =>{
            console.log(resposta.data)
            setDesabilitar(false)
            navigate('/hoje')
        })

        promisse.catch(erro=> {
            console.log(erro.response.data.message)
            alert(erro.response.data.message)
        })
    }


    return(
        <PageContainer>
            <img src="src/assets/WhatsApp Image 2023-05-30 at 17.00.05.jpeg" alt="foto" />
            <form onSubmit={rota1}>
                <input disabled={desabilitar} placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                <input disabled={desabilitar} placeholder="senha" onChange={(e) => setPassword(e.target.value)}/>

                <button disabled={desabilitar}>Entrar</button>
            </form>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </PageContainer>

    );
}