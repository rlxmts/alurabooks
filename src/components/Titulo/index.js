import styled from "styled-components"

export const Titulo = styled.h2`
    font-size: ${props => props.tamanho || '3rem'};
    color: ${props => props.cor ||' #EB9B00'};
    text-align: center;
`
