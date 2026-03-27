import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "./pages/Principal"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Perfil from "./pages/Perfil"
import Contato from "./pages/Contato"
import Inicio from "./pages/Inicio"
import Detalhes from "./pages/Detalhes"
import Filme from "./pages/Filme"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/perfil/:nome" element={<Perfil />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/detalhes" element={<Detalhes />} />
                <Route path="/filme/:id" element={<Filme/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App