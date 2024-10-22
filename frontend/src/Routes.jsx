import App from "./App"
import { Route, Routes } from "react-router-dom"
import BaseDeConhecimento from "./pages/BaseDeConhecimento"
import SobreOProjeto from "./pages/SobreOProjeto"
import Presentation from "./pages/Presentation"
import ProblemaDaBase from "./pages/ProblemaDaBase"


const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Presentation/>} /> 
            <Route path="/sistema-de-fluxo" element={<App/>} /> 
            <Route path="/base-de-conhecimento" element={<BaseDeConhecimento/>} /> 
            <Route path="/sobre-o-projeto" element={<SobreOProjeto/>} />
            <Route path="/base-de-conhecimento/problema/:id" element={<ProblemaDaBase/>} />
        </Routes>
    )
}
export default MainRoutes