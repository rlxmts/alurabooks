import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { Livros } from "./dadosPesquisa";

const ContainerPesquisa = styled.section`
    width:100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #FFFFFF;
    padding: 1rem;
`

const Titulo = styled.h2`
    font-size: 3rem;
`


const Pesquisa = ()=> {

    const [livroPesquisado, setLivroPesquisado] = useState([]);

    return(
        <ContainerPesquisa>
            <Titulo>Ja sabe por onde começar?</Titulo>
            <h3>Encontre seu livro em nossa estante.</h3>
            <Input 
                placeholder="Escreva o nome do livro..." 
                onChange={(e) => {
                    const busca = e.target.value.toLowerCase();
                    const resultado = Livros.filter( livro => livro.nome.toLowerCase().includes(busca) )
                    setLivroPesquisado(resultado);
                    console.log(livroPesquisado);
                }}
            />
            {/* <p>{textoDigitado}</p> */}
        </ContainerPesquisa>
    )
}

export default Pesquisa;