import Logo from "../Logo";
import Navegacao from "../Navegacao";

const Cabecalho = ()=> {
    return(
        <header style={ {backgroundColor:'#FFF'} }>
            <div style={ {display:"flex", 
                         justifyContent: 'space-between',
                         maxWidth: '1280px',
                         margin: '0 auto',
                         alignItems: 'center'} }>
            <Logo />
            <Navegacao />
            </div>
        </header>
    )
}

export default Cabecalho;