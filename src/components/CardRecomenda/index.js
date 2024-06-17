import styled from "styled-components";
import { Titulo } from "../Titulo";

const ContainerCard = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap:wrap;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 3px 3px 10px #01010180;
    padding: 1.5rem;
    `

const CardTextos = styled.div`
    text-align: center;

    h4{
        margin: 1rem 0;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }
;
`
const CardContainerImg = styled.div`
    
    text-align: center;
    max-width: 146px;
    
    img{
        display: block;
    }

    button{
        width: 100%;
        padding: .5rem;
        border: none;
        background-color: #EB9B00;
        color: #FFFFFF;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        margin: 0 auto;
    }
 `

const CardRecomenda = ({ titulo, subtitulo, descricao, img })=> {
    return(
        <ContainerCard>
            <CardTextos>
                <Titulo tamanho="1.2rem">{titulo}</Titulo>
                <h3>{subtitulo}</h3>
                <p>{descricao}</p>
            </CardTextos>
            <CardContainerImg>
                <img src={img} />
                <button>Saiba Mais</button>
            </CardContainerImg>
        </ContainerCard>
    )
}

export default CardRecomenda;