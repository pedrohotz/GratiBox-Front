import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Container,StyledButtonLarge, StyledInput} from "../style/sharedStyles";
import Swal from "sweetalert2";
import { postLogin } from "../service/api";
import UserContext from "../context/usercontext";

export default function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    let navigate = useNavigate();
    function loginSubmit(event){
        event.preventDefault();
        if(email.indexOf('@') < 0){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Digite um email válido"
            })
            return;
        }
        const body = {
            email,
            password,
        }
        postLogin(body).then((res)=> {
            setUser(res.data);
            navigate('/subscription');
        }).catch(()=>{
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Falha ao fazer login"
            })
        })
    }
    return(
        <Container>
            <h1 className="title">Bem vindo ao GratiBox</h1>
            <form className="login" onSubmit={loginSubmit}>
                <StyledInput placeholder="Email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required ></StyledInput>
                <StyledInput placeholder="Senha" type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} required ></StyledInput>
                <StyledButtonLarge style={{marginTop:"144px"}} type="submit">Login</StyledButtonLarge>
                <h2 onClick={()=>navigate('/sign-up')}>Ainda não sou grato</h2>
            </form>
        </Container>
    )
}