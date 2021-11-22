import { useNavigate } from "react-router";
import { Container,StyledButtonLarge, StyledInput} from "../style/sharedStyles";



export default function Login(){
    let navigate = useNavigate();
    return(
        <Container>
            <h1 className="title">Bem vindo ao GratiBox</h1>
            <form className="login">
                <StyledInput placeholder="Email" type="email"></StyledInput>
                <StyledInput placeholder="Senha" type="password"></StyledInput>
                <StyledButtonLarge style={{marginTop:"144px"}}>Login</StyledButtonLarge>
                <h2 onClick={()=>navigate('/sign-up')}>Ainda não sou grato</h2>
            </form>
        </Container>
    )
}