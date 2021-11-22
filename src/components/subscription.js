
import { Container,StyledSubTitle, StyledButton, StyledSpan} from "../style/sharedStyles";
import image04 from "../img/image04.jpg";
import image02 from "../img/image02.jpg";
import image03 from "../img/image03.jpg";
import { useContext } from "react";
import UserContext from "../context/usercontext";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getSignature } from "../service/api";
import { useState } from "react/cjs/react.development";

export default function Subscription(){
    const {user} = useContext(UserContext);
    const [signature,setSignature] = useState({});
    const [selectCha, setSelectCha] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        if(!user){
            navigate('/');
        }
        getSignature(user.token).then((res)=> setSignature(res.data)).catch((error)=>{
            if(error.response.status === 404){
                setSignature(false);
            }
        })
        // eslint-disable-next-line
    },[user])
    
    function checkPlan(idPlan){
        if(idPlan === 1){
            return ('Plano Mensal')
        }
        else {
            return ('Plano Semanal')
        }
    }

    return(
        <Container>
            {signature ?<> <h2 className="sub">“Agradecer é arte de atrair coisas boas”</h2>
                <div className="card-sub">
                    <img src={image03} alt="imgSignature3" ></img>
                    <div className="info">
                        <h2>Plano:</h2>
                        <span>{checkPlan(signature.plan_id)}</span>
                    </div>
                    <div className="info">
                        <h2>Data de assinatura:</h2>
                        <span>{signature.sign_date}</span>
                    </div>
                    <div className="data">
                        <h2>Próximas entregas:</h2>
                        <span>dd/mm/aa</span>
                        <span>dd/mm/aa</span>
                        <span>dd/mm/aa</span>
                    </div>
                    <div className="rodape">
                        <StyledSpan selected={} >Chás</StyledSpan>
                        <StyledSpan>Produto Orgânicos</StyledSpan>
                        <StyledSpan>Incensos</StyledSpan>
                    </div>
                </div>
                <StyledButton>Avaliar entregas</StyledButton></> : <> <h1 className="title">Bom te ver por aqui, {user?.name}</h1>
            <StyledSubTitle style={{textAlign:"start"}}>Você ainda não assinou um plano, que tal começar agora?</StyledSubTitle>
                <div className="card">
                    <img src={image04} alt="imgSignature1" ></img>
                    <h1>Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.</h1>
                    <button onClick={()=>navigate('/sign')}>Assinar</button>
                </div>
                <div className="card">
                    <img src={image02} alt="imgSignature2"></img>
                    <h1>Você recebe um box por mês. Ideal para quem está começando agora.</h1>
                    <button onClick={()=>navigate('/sign')}>Assinar</button>
                </div></>
            }
            
                
        </Container>
    )
}

