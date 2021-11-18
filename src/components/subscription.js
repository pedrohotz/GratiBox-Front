
import { Container,StyledSubTitle, StyledButton} from "../style/sharedStyles";
import image04 from "../img/image04.jpg";
import image02 from "../img/image02.jpg";
import image03 from "../img/image03.jpg";


export default function Subscription(){
    return(
        <Container>
            <h1 className="title">Bom te ver por aqui, @user</h1>
            {/* <StyledSubTitle style={{textAlign:"start"}}>Você ainda não assinou um plano, que tal começar agora?</StyledSubTitle>
                <div className="card">
                    <img src={image04} alt="imgSignature1" ></img>
                    <h1>Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.</h1>
                    <button>Assinar</button>
                </div>
                <div className="card">
                    <img src={image02} alt="imgSignature2"></img>
                    <h1>Você recebe um box por mês. Ideal para quem está começando agora.</h1>
                    <button>Assinar</button>
                </div> */}

                <h2 className="sub">“Agradecer é arte de atrair coisas boas”</h2>
                <div className="card-sub">
                    <img src={image03} alt="imgSignature3" ></img>
                    <div className="info">
                        <h2>Plano:</h2>
                        <span>@tipo_de_plano</span>
                    </div>
                    <div className="info">
                        <h2>Data de assinatura:</h2>
                        <span>dd/mm/aa</span>
                    </div>
                    <div className="data">
                        <h2>Próximas entregas:</h2>
                        <span>dd/mm/aa</span>
                        <span>dd/mm/aa</span>
                        <span>dd/mm/aa</span>
                    </div>
                    <div className="rodape">
                        <span>Chás</span>
                        <span>Produtos Orgânicos</span>
                        <span>Incensos</span>
                    </div>
                </div>
                <StyledButton>Avaliar entregas</StyledButton>
        </Container>
    )
}