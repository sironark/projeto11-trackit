import { Link } from "react-router-dom";
import { PageContainer } from "./styled";
import { useState } from "react";
import axios from "axios";


export default function RegisterPage(){
    const [desabilitar, setDesabilitar] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [image, setImage] = useState("");

    function rota2(e){
        e.preventDefault();

        const URL_LOG = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

        const obj = {email: email,
        name: nome,
        image: image,
        password: password};


        const aux = true
        setDesabilitar(aux)
        const promisse = axios.post(URL_LOG, obj)

        promisse.then(resposta =>{
            console.log(resposta.data)
            setDesabilitar(false)
        })

        promisse.catch(erro=> {
            console.log(erro.response.data.message)
            //alert(erro.response.data.message)
        })
    }
    
    
    
    
    return(
        <PageContainer>
        <img src="src/assets/WhatsApp Image 2023-05-30 at 17.00.05.jpeg" alt="foto" />
        <form onSubmit={rota2}>
            <input disabled={desabilitar} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input disabled={desabilitar} placeholder="senha" onChange={(e) => setPassword(e.target.value)}/>
            <input disabled={desabilitar} placeholder="nome" onChange={(e) => setNome(e.target.value)} />
            <input disabled={desabilitar} placeholder="foto" onChange={(e) => setImage(e.target.value)}/>

            <button disabled={desabilitar}>Entrar</button>
        </form>
        <Link to={`/`}>
        <p>Já tem uma conta? Faça login!</p>
        </Link>
    </PageContainer>

    );
}