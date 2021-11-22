
import { Container,StyledButton } from "../style/sharedStyles"
import image03 from "../img/image03.jpg";
import arrow from "../img/arrow.png"
import cep from "cep-promise";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { postSignature } from "../service/api";
import UserContext from "../context/usercontext";
import { useNavigate } from "react-router";
export default function Sign(){
    const [plans,setPlans] = useState("");
    const [day,setDay] = useState("");
    const [chas,setChas] = useState(false);
    const [ince,setInce] = useState(false);
    const [prodOrg,setProdOrg] = useState(false);
    const [disableSelect, setDisableSelect] = useState(true);
    const [next,setNext] = useState(false);
    const [name,setName] = useState('');
    const [adress,setAdress] = useState('');
    const [cepValue,setCep] = useState('');
    const [adressData, setAdressData] = useState();
    const [state,setState] = useState('')
    const [city,setCity] = useState('')
    const [products,setProducts] = useState([]);
    const {user} = useContext(UserContext);
    let navigate = useNavigate();
    useEffect(() =>{
        if(plans === "Plano mensal" || plans === "Plano semanal"){
            setDisableSelect(false);
        }
        else if(plans === "Plano"){
            setDisableSelect(true);
        }
         // eslint-disable-next-line
    },[plans]);
    useEffect(() => {
        if(!user){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Você não está logado faça login para continuar.."
            })
            navigate('/');
        }
        // eslint-disable-next-line
    },[user]);
       
    useEffect(() =>{
        if(cepValue.length === 8){
            cep(cepValue).then((res)=> setAdressData(res)).catch(()=> {
                Swal.fire({
                    icon: "error",
                    title: "ops",
                    text: "Falha ao buscar CEP tente novamente"
                })
            setCep('');})
        }
    },[cepValue]);

    useEffect(() =>{
        setAdress(adressData?.street);
        setState(adressData?.state);
        setCity(adressData?.city);
    },[adressData]);

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
    function checkProducts(){      
        if(chas){
           products.push('Chás');
           setProducts([...products]);
        }
        if(ince){
            products.push('Incensos');
           setProducts([...products]);
        }
        if(prodOrg){
            products.push('Produtos Orgânicos');
           setProducts([...products]);
        }
        if(!plans || !day || products.length === 0){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Selecione as opções antes de continuar"
            })
            return;
        }
        
        setNext(true);
    }

    function submitSubscription(e){
        e.preventDefault();
        if(!name || !adressData){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Preencha os campos antes de continuar"
            })
            return;
        }
        let planType = 0;
        if(plans === 'Plano mensal'){
             planType = 1;
        }
        else if(plans === 'Plano semanal'){
             planType = 2;
        }
        const body = {
            planId: planType,
            products,
            signDate: dayjs().format('DD/MM/YY'),
            deliveryDay: day,
            fullName: name,
            adress,
            cep: cepValue,
            city,
            state,
        }
        postSignature(body,user.token).then(async ()=> { 
           await Swal.fire({
                icon: "success",
                title: "Assinatura realizada com sucesso",
            })
            navigate('/subscription')
        }).catch(()=> {
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Falha ao realizar assinatura tente novamente mais tarde"
            })
        })
    }


    return(
        <Container>
        <h1 className="title">Bom te ver por aqui, {user?.name}</h1>
        <h2 className="sub">“Agradecer é arte de atrair coisas boas”</h2>
        {next ? <>
            <div className="card-sub" style={{height:"429px"}}>
                <img src={image03} alt="imgSignature3" ></img>    
                <h3>Ao digitar o CEP o endereço será preenchido automaticamente , <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer">encontre seu CEP aqui</a></h3>   
                <form>
                    <input type="text" placeholder="Nome Completo"  value={name} onChange={e => setName(e.target.value)} className="form-sign" required></input>
                    <input type="text" placeholder="Endereço de entrega" value={adressData?.street || ''} disabled className="form-sign" required></input>
                    <input type="number" placeholder="CEP" className="form-sign" value={cepValue} onChange={e => setCep(e.target.value)} required></input>
                    <div className="city">
                    <input type="text" placeholder="Cidade" style={{width:"168px"}} className="form-sign" value={adressData?.city || ''}  disabled required></input>
                    <input type="text" placeholder="Estado" className="form-sign-state" value={adressData?.state || ''}  disabled required></input>
                    </div>
                    
                </form>
            </div> <StyledButton style={{marginBottom:"10px"}} onClick={(e)=> submitSubscription(e)}>Finalizar</StyledButton> </>: <> <div className="card-sub" style={{height:"429px"}}>
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
                        <select name="entregas"  value={day} onChange={e => setDay(e.target.value)} >
                            <option>Entrega</option>
                            <option>Dia 01</option>
                            <option>Dia 05</option>
                            <option>Dia 10</option>
                        </select> :  
                        <select name="entregas" disabled={disableSelect} value={day} onChange={e => setDay(e.target.value)} >
                            <option>Entrega</option>
                            <option>Segunda</option>
                            <option>Quarta</option>
                            <option>Sexta</option>
                        </select> }   
                    </div>
                    <div className="check-box">
                        <h2>Quero receber</h2>
                        <div className="form">
                            <div className="option">
                                <input type="checkbox" className="check" onChange={e => setChas(e.target.checked)}></input>
                                <span className="checkmark"></span>
                                <label>Chás</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" className="check" onChange={e => setInce(e.target.checked)}></input>
                                <span className="checkmark"></span>
                                <label>Incensos</label>
                            </div>
                            <div className="option">
                                <input type="checkbox" className="check" onChange={e => setProdOrg(e.target.checked)}></input>
                                <span className="checkmark"></span>
                                <label>Produtos orgânicos</label>
                            </div>
                        </div>                 
                    </div>
                </form>
            </div>
            <StyledButton style={{marginBottom:"10px"}} onClick={checkProducts}>Próximo</StyledButton> </>}
            
            

    </Container>
    )
}