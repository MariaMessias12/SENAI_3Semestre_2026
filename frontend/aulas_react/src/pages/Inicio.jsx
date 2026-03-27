import { Link } from 'react-router-dom'

function Inicio() {
    return (
        <div>
            <h1>Bem-vindo</h1>
            <Link to="/detalhes">Detalhes</Link>
            <br />
            <Link to="/">Página principal</Link>
        </div>

    )
}

export default Inicio