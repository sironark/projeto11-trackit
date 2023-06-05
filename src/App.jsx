import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./PagesComponets/LoginPages/Login"
import RegisterPage from "./PagesComponets/RegisterPages/Register"
import HabitosPage from "./PagesComponets/HabitosPages/HabitosPage"
import { HojePage } from "./PagesComponets/HojePages/HojePage"



function App() {
  

  return (
    <>
<BrowserRouter>
    <Routes>
      <Route path="/" element ={ <LoginPage/>}/>
      <Route path="/cadastro" element = {<RegisterPage/>}/>
      <Route path="/habitos" element ={ <HabitosPage/>}/>
      <Route path="/hoje" element = {<HojePage/>}/>

    
    </Routes>
</BrowserRouter>
    </>
  )
}

export default App
