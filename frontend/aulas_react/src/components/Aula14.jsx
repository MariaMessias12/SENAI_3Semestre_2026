import { estilos } from "../style/Estilos"
import { Link, useNavigate } from "react-router-dom"

const Aula14 = () => {
    const navigate = useNavigate();

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 -React Router - Navegação em React</h2>
            <h3>Biblioteca que permite criar e gerenciar</h3>
            <hr />
            <h3>Navegação com links do React Router</h3>
            <Link to='/'>Página Principal</Link>
            <br />
            <Link to='/sobre'>Sobre</Link>
            <br />
            <Link to='senai'>Página Inexistente</Link>
            <br />
            <Link to='/inicio'>Inicio</Link>
            <br />
            <Link to='/detalhes'>Detalhes</Link>
            <br />
            <Link to='/contato'>Contato</Link>
            <hr />

            <h3>Navegação com programação utilizando o useNavigate</h3>
            <button onClick={() => navigate('/sobre')}>Sobre</button>

            <hr />
            <h3>Rota dinâmica com useParams</h3>
            <button onClick={() => navigate('/perfil/Ricardo')}>Perfil do Ricardo</button>
            <button onClick={() => navigate('/perfil/Douglas')}>Perfil do Douglas</button>
            <hr />
            <button onClick={() => navigate('/filme/1')}>Filme 1</button>
            <button onClick={() => navigate('/filme/2')}>Filme 2</button>




            
        </div>
    )
}

export default Aula14