import styled from 'styled-components';
import logo from '../../img/logo.svg';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    
    span{
        margin-left:10px;
        font-weight: 700;
    }
`

const Logo = ()=> {
    return(
        <LogoContainer className="Logo-container">
            <img src={logo} alt='logo'></img>
            <span>Alura</span> Books
        </LogoContainer>
    )
}

export default Logo;