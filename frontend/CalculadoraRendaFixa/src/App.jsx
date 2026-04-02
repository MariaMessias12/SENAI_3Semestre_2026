import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Calculadora from './pages/Calculadora'
import Sobre from './pages/Sobre'

function App() {
  return (
    //BrowserRouter:habilita o sistema de navegação por rotas
    <BrowserRouter>
      {/* Barra de navegação */}
      <NavBar />
      
      <main>
        {/* Área de conteúdo principal */}
        <Routes>
          <Route path='/' element={<Calculadora/>} />
          <Route path='/sobre' element={<Sobre/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App