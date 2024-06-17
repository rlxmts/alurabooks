import styled from "styled-components";
import { Livros } from "../Pesquisa/dadosPesquisa";

const ContainerLancamentos = styled.section`
    background-color: #FFFFFF;
    padding: 5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`

const UltimosLancamentos = ()=> {
    return (
        <ContainerLancamentos>
            <h2>Últimos Lançamentos</h2>
            <ul>
                {Livros.map( livro => (
                    <img src={livro.src} />
                ))}
            </ul>
        </ContainerLancamentos>
    )
}

export default UltimosLancamentos;