import styled from "styled-components";


const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #6D7CE4;
display: flex;
flex-direction: column;
align-items: center;
 form{
     display: flex;
     flex-direction: column;
     align-items: center;

 }
    .login{
        margin-top: 43px;
        h2{
            color: #FFFFFF;
            margin-top: 17px;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
        }
    }
    .title{
        margin-top: 101px;
        font-weight: 700;
        font-size: 28px;
        color: #ffffff;
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

const StyledButtonLarge = styled.button`
width: 237px;
height: 56px;
background: #8C97EA;
border-radius: 10px;
border: none;
font-weight: bold;
font-size: 36px;
line-height: 42px;
text-align: center;
color: #FFFFFF;
`

const StyledTitle = styled.h1`
font-weight: 700;
margin-top: 53px;
font-size: 28px;
color: #ffffff;
`
const StyledInput = styled.input`
width: 325px;
height: 64px;
background: #FFFFFF;
border: 1px solid #604848;
border-radius: 10px;
font-size: 24px;
padding: 10px;
margin-bottom: 8px;
    ::placeholder{
        font-size: 24px;
        color: rgba(96, 72, 72, 0.4);
        
    }
`

export {
    Container,
    StyledButton,
    StyledTitle,
    StyledInput,
    StyledButtonLarge,
}