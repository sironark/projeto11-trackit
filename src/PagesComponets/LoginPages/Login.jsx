import { Link,  useNavigate } from "react-router-dom";
import { PageContainer } from "./styled";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useContext } from "react";
import UserContext from "../../components/Context/UseContext";

export default function LoginPage(){
const navigate = useNavigate();
const [desabilitar, setDesabilitar] = useState(false)
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const {user, setUser} = useContext(UserContext) 

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
            const userObj = { ...user, name: resposta.data.name, image: resposta.data.image, email: resposta.data.email, token: resposta.data.token };
            if(!desabilitar){
            setUser(userObj)
            setDesabilitar(false)
            navigate('/hoje')
            }
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
            <form onSubmit={rota1}>
                <input data-test="email-input" disabled={desabilitar} placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                <input data-test="password-input" disabled={desabilitar} placeholder="senha" onChange={(e) => setPassword(e.target.value)}/>

                <button  data-test="login-btn" disabled={desabilitar} >{desabilitar ? <ThreeDots type="ThreeDots" color="#fff" height={20} width={40}  /> :"Entrar"}</button>
            </form>
            <Link data-test="signup-link"  to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </PageContainer>

    );
}