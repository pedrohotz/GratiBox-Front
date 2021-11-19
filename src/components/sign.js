
import { Container,StyledButton } from "../style/sharedStyles"
import image03 from "../img/image03.jpg";
import arrow from "../img/arrow.png"
import {AiOutlineArrowDown} from 'react-icons/ai';
import { useEffect, useState } from "react";
export default function Sign(){
    const [plans,setPlans] = useState("");
    const [disableSelect, setDisableSelect] = useState(true);

    useEffect(() =>{
        if(plans === "Plano mensal" || plans === "Plano semanal"){
            setDisableSelect(false);
        }
        else if(plans === "Plano"){
            setDisableSelect(true);
        }
         // eslint-disable-next-line
    },[plans]);

    function checkPlan(){
        if (plans === "Plano"){
            return;
        }
        if(plans === "Plano mensal"){
            return true
        }
        else {
            return false;
        }
    }
    return(
        <Container>
        <h1 className="title">Bom te ver por aqui, @user</h1>
            <h2 className="sub">“Agradecer é arte de atrair coisas boas”</h2>
            <div className="card-sub" style={{height:"429px"}}>
                <img src={image03} alt="imgSignature3" ></img>
                <form>
                    <div className="dropdown">
                        <img src={arrow} alt="icon"></img>
                        <select name="planos" value={plans} onChange={e => setPlans(e.target.value)} required>
                            <option>Plano</option>
                            <option>Plano mensal</option>
                            <option>Plano semanal</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <img src={arrow} alt="icon"></img>
                        {checkPlan() ? 
                        <select name="entregas" >
                            <option>Entrega</option>
                            <option>Dia 01</option>
                            <option>Dia 05</option>
                            <option>Dia 10</option>
                        </select> :  
                        <select name="entregas" disabled={disableSelect}>
                            <option>Entrega</option>
                            <option>Segunda</option>
                            <option>Quarta</option>
                            <option>Sexta</option>
                        </select> }   
                    </div>
                    <div className="check-box">
                        <h2>Quero receber</h2>
                        <form>
                            <div className="option">
                                <input type="checkbox" className="check"></input>
                                <span class="checkmark"></span>
                                <label>Chás</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" className="check"></input>
                                <span class="checkmark"></span>
                                <label>Incensos</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" className="check"></input>
                                <span class="checkmark"></span>
                                <label>Produtos orgânicos</label>
                            </div>
                        </form>
                    </div>
                </form>
            </div>
            <StyledButton style={{marginBottom:"10px"}}>Próximo</StyledButton>
    </Container>
    )
}