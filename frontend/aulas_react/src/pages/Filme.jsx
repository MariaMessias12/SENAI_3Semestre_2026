import { use } from 'react'
import { Link, useParams } from 'react-router-dom'

function Filme() {
    const {id} = useParams();


    return (
        <div>
            <h1>Exibindo dados do Filme {id}</h1>
            <Link to="/">Voltar para a página principal</Link>
        </div>

    )
}

export default Filme