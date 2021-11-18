
import { Container,StyledSubTitle} from "../style/sharedStyles";
import image04 from "../img/image04.jpg";
import image02 from "../img/image02.jpg";


export default function Subscription(){
    return(
        <Container>
            <h1 className="title">Bom te ver por aqui, @user</h1>
            <StyledSubTitle style={{textAlign:"start"}}>Você ainda não assinou um plano, que tal começar agora?</StyledSubTitle>
                <div className="card">
                    <img src={image04} alt="imgSignature1" ></img>
                    <h1>Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.</h1>
                    <button>Assinar</button>
                </div>
                <div className="card">
                    <img src={image02} alt="imgSignature2"></img>
                    <h1>Você recebe um box por mês. Ideal para quem está começando agora.</h1>
                    <button>Assinar</button>
                </div>
        </Container>
    )
}