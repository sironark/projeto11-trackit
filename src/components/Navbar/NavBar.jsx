import { useContext } from "react";
import { NavBar } from "./styled";
import UserContext from "../Context/UseContext";

export function NavBarr(){
    const {user} = useContext(UserContext)
    return(

        <NavBar data-test="header">
        <img src="src/assets/logo-mini.svg" alt="logoMini"/>
        <img data-test="avatar" src={user.image} alt="foto de perfil"/>
        </NavBar>
    );
}