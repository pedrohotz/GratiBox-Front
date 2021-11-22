import { Container,StyledButtonLarge, StyledInput} from "../style/sharedStyles";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { postRegister } from "../service/api";
export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cPassword, setcPassword] = useState('');
    let navigate = useNavigate();

    function registerSubmit(event){
        event.preventDefault();
        if(password !== cPassword){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Senhas necessitam ser iguais"
            })
            setPassword('')
            return;
        }
        if(email.indexOf('@') < 0){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Digite um email válido"
            })
            return;
        }
        if(name.length < 3){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Digite um nome de no mínimo 3 caracteres"
            })
            return;
        }
        if(password.length < 5){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Digite uma senha de no mínimo 5 caracteres"
            })
            return;
        }
        const body = {
            name,
            email,
            password
        }
        console.log(body);
        postRegister(body).then(()=> {
            Swal.fire({
                icon: "success",
                title: "Conta criada com sucesso",
            }) 
            setTimeout(()=>{
                navigate('/sign-in')
            },1000);
        }).catch((error)=>{console.log(error.status)});
    }

    return(
        <Container>
            <h1 className="title">Bem vindo ao GratiBox</h1>
            <form className="login" onSubmit={registerSubmit}>
                <StyledInput placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required ></StyledInput>
                <StyledInput placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></StyledInput>
                <StyledInput placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></StyledInput>
                <StyledInput placeholder="Confirmar senha" type="password" value={cPassword} onChange={(e) => setcPassword(e.target.value)} required></StyledInput>
                <StyledButtonLarge style={{marginTop:"62px"}} type="submit">Cadastrar</StyledButtonLarge>
                <h2 onClick={()=> navigate('/sign-in')}>Já sou grato</h2>
            </form>
        </Container>
    )
}