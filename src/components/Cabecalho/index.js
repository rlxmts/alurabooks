import styled from "styled-components";
import Logo from "../Logo";
import Navegacao from "../Navegacao";

const CabecalhoContainer = styled.header`
    background-color: #FFF;
    padding: 16px;

    .cabecalho-container{
        display:flex;
        justify-content: space-between;
        max-width: 1280px;
        width:100%;
        margin: 0 auto;
        align-items: center;
        flex-wrap:wrap;
    }
`

const Cabecalho = ()=> {
    return(
        <CabecalhoContainer>
            <div className="cabecalho-container">
                <Logo />
                <Navegacao />
            </div>
        </CabecalhoContainer>
    )
}

export default Cabecalho;