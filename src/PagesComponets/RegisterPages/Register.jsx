import { Link, useNavigate } from "react-router-dom";
import { PageContainer } from "./styled";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


export default function RegisterPage(){
    const [desabilitar, setDesabilitar] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate()
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
            navigate('/')
        })

        promisse.catch(erro=> {
            console.log(erro.response.data.message)
            alert(erro.response.data.message)
            setDesabilitar(false)
        })
    }
    
    
    
    
    return(
        <PageContainer>
        <img src="src/assets/WhatsApp Image 2023-05-30 at 17.00.05.jpeg" alt="foto" />
        <form onSubmit={rota2}>
            <input required data-test="email-input" disabled={desabilitar} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input required data-test="password-input" disabled={desabilitar} placeholder="senha" onChange={(e) => setPassword(e.target.value)}/>
            <input required data-test="user-name-input"  disabled={desabilitar} placeholder="nome" onChange={(e) => setNome(e.target.value)} />
            <input required data-test="user-image-input"  disabled={desabilitar} placeholder="foto" onChange={(e) => setImage(e.target.value)}/>

            <button data-test="signup-btn" type="submit" disabled={desabilitar}>{desabilitar ? <ThreeDots type="ThreeDots" color="#fff" height={20} width={40}  /> :"Cadastrar"}</button>
        </form>
        <Link data-test="login-link"  to={`/`}>
        <p>Já tem uma conta? Faça login!</p>
        </Link>
    </PageContainer>

    );
}