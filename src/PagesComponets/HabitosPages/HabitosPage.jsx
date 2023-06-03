import { AddHabitos, AvisoHabitos, MenuBottom, NavBar, PageContainerHabitos } from "./styled";





export default function HabitosPage(){


    return(
        <PageContainerHabitos>

            <NavBar>
                <img src="src/assets/logo-mini.svg" alt="logoMini"/>
                <div alt="foto de perfil"></div>
            </NavBar>

            <AddHabitos>
                <p>Meus hábitos</p>
                <button><p>+</p></button>
            </AddHabitos>

            <AvisoHabitos>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </AvisoHabitos>

            <MenuBottom>
                <button>Hábitos</button>
                <button>Hoje</button>
                <button>Histórico</button>
            </MenuBottom>
        </PageContainerHabitos>
    );
}
