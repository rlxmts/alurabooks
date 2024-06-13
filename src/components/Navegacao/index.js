import iconePerfil from '../../img/perfil.svg';
import iconeSacola from '../../img/sacola.svg';
import styled from 'styled-components';

const ListaNavegacao = styled.ul`
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;

    li{
        cursor:pointer;
    }
`

const Navegacao = () => {

    const links = [
        'Início',
        'Favoritos',
        'Minha Estante'
    ]

    return(
        <nav>
            <ListaNavegacao>
                {links.map(item => <li key={item}>{item}</li>)}
                <li><img src={iconePerfil} alt='Meu Perfil'/></li>
                <li><img src={iconeSacola} alt='Sacola de compras'/></li>
            </ListaNavegacao>
        </nav>
    )
}

export default Navegacao;