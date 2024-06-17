import styled from "styled-components";
import { Livros } from "../Pesquisa/dadosPesquisa";
import {Titulo} from "../Titulo";
import { ListaDeLivro } from "../ListaDeLivros";
import CardRecomenda from "../CardRecomenda";
import  imagemLivro  from "../../img/livro2.png";


const ContainerLancamentos = styled.section`
    background-color: #FFFFFF;
    padding: 5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    text-align:center;

    

  
`

const UltimosLancamentos = ()=> {
    return (
        <ContainerLancamentos>
            <Titulo>Últimos Lançamentos</Titulo>
            <ListaDeLivro>
                {Livros.map( livro => (
                    <li key={livro.nome}>
                        <p>{livro.nome}</p>
                        <img src={livro.src} />
                    </li>
                ))}
            </ListaDeLivro>
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Criando uma aplicação com a plataforma Google."
                img={imagemLivro}
            /> 
        </ContainerLancamentos>
    )
}

export default UltimosLancamentos;