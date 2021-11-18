import { Container,StyledButtonLarge, StyledInput} from "../style/sharedStyles";



export default function Register(){
    return(
        <Container>
            <h1 className="title">Bem vindo ao GratiBox</h1>
            <form className="login">
                <StyledInput placeholder="Nome" type="text"></StyledInput>
                <StyledInput placeholder="Email" type="email"></StyledInput>
                <StyledInput placeholder="Senha" type="password"></StyledInput>
                <StyledInput placeholder="Confirmar senha" type="password"></StyledInput>
                <StyledButtonLarge style={{marginTop:"62px"}}>Cadastrar</StyledButtonLarge>
                <h2>Já sou grato</h2>
            </form>
        </Container>
    )
}