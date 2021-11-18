import styled from "styled-components"
import image05 from "../img/image05.webp";
import { Container,StyledButton,StyledTitle,StyledSubTitle } from "../style/sharedStyles";
export default function Home(){
    return(
        <Container>
            <StyledTitle>Bem vindo ao GratiBox</StyledTitle>
            <StyledSubTitle>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</StyledSubTitle>
            <img src={image05} width="386" height="380" style={{zIndex:"0"}} alt="homeImage"></img>
            <ButtonDiv>
                <StyledButton>Quero começar</StyledButton>
                <h1>Já sou grato</h1>
            </ButtonDiv>
        </Container>
    )
}





const ButtonDiv = styled.div`
position: absolute;
bottom: 0;
z-index: 1;
display: flex;
align-items: center;
flex-direction: column;
background-color: #4D65A8;
width: 375px;
height: 170px;

    h1{
        color: #FFFFFF;
        margin-top: 17px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
    }
`






