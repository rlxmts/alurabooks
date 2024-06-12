const Navegacao = () => {

    const links = [
        'Início',
        'Favoritos',
        'Minha Estante'
    ]

    return(
        <nav>
            <ul>
                {links.map(item => <li>{item}</li>)}
            </ul>
        </nav>
    )
}

export default Navegacao;