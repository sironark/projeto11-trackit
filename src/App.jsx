import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./PagesComponets/LoginPages/Login"
import RegisterPage from "./PagesComponets/RegisterPages/Register"
import HabitosPage from "./PagesComponets/HabitosPages/HabitosPage"
import { HojePage } from "./PagesComponets/HojePages/HojePage"
import { HistoricoPage } from "./PagesComponets/HistoricoPages/HistoricoPage"
import UserContext from "./components/Context/UseContext"
import { useState } from "react"



function App() {
  const [user, setUser] = useState({})

  return (
    <>
<BrowserRouter>
<UserContext.Provider value={{user, setUser}}>
    <Routes>
      <Route path="/" element ={ <LoginPage/>}/>
      <Route path="/cadastro" element = {<RegisterPage/>}/>
      <Route path="/habitos" element ={ <HabitosPage/>}/>
      <Route path="/hoje" element = {<HojePage/>}/>
      <Route path="/historico" element={<HistoricoPage/>}/>
    
    </Routes>
    </UserContext.Provider>
</BrowserRouter>
    </>
  )
}

export default App
