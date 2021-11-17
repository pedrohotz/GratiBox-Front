import styled from "styled-components"
import image05 from "../img/image05.webp";
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



const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #6D7CE4;
display: flex;
flex-direction: column;
align-items: center;
`

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

const StyledButton = styled.button`
margin-top: 29px;
color: #FFFFFF;
font-style: normal;
border: none;
font-weight: bold;
font-size: 18px;
width: 202px;
height: 45px;
background: #8C97EA;
border-radius: 10px;
`


const StyledTitle = styled.h1`
font-weight: 700;
margin-top: 53px;
font-size: 28px;
color: #ffffff;
`

const StyledSubTitle = styled.h2`
width: 341px;
margin-top: 44px;
color: #FFFFFF;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
text-align: center;
`