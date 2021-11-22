import styled from "styled-components";


const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #6D7CE4;
display: flex;
flex-direction: column;
align-items: center;
overflow: scroll;
 form{
     display: flex;
     flex-direction: column;
     align-items: center;

 }
 .sub{
     width: 341px;
     height: 33px;
     margin-top: 22px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-align: start;
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

    .card{
        margin-top: 30px;
        margin-bottom: 30px;
        width: 358px;
        height: 400px;
        border-radius: 25px;
        background-color: #E5CDB3;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 354px;
            height: 219px;
            border-radius: 25px;
        }
        h1{
            margin-top: 21px;
            width: 320px;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            color: #4D65A8;
            text-align: start;
        }
        button{
            border: none;
            font-weight: 500;
            font-size: 24px;
            color: #FFFFFF;
            margin-top: 36px;
            width: 168px;
            height: 39px;
            background: #8C97EA;
            border-radius: 10px;
            margin-bottom: 20px;
        }
    }

    .card-sub{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 356px;
        height: 382px;
        background: #FFFFFF;
        border-radius: 10px;
        img{
            width: 349px;
            height: 172px;
            border-radius: 25px;
        }
        .info{
            text-align: center;
            display: flex;
            margin-left: 19px;
            h2{
                font-weight: bold;
                font-size: 18px;
                line-height: 21px;
                color: #4D65A8
            }
            span{
                font-weight: bold;
                color: #E63C80;
                font-size: 18px;
                margin-left: 8px;
            }
        }
        .form-sign{
            width: 290px;
            height: 44px;
            background: rgba(224, 209, 237, 0.62);
            border-radius: 5px;
            border: none;
            margin-bottom: 7px;
            padding:10px;
            ::placeholder{
                font-weight: bold;
                font-size: 18px;
                line-height: 21px;
                color: #4D65A8;
            }
        }
        .city{
            display: flex;
            width: 290px;
            justify-content: space-between;
        }

        .data{
            display: flex;
            flex-direction: column;
            margin-left: 19px;
            span{
                margin-left: 32px;
                font-weight: bold;
                color: #E63C80;
                font-size: 18px;
                margin-bottom: 5px;
            }
            h2{
                font-weight: bold;
                font-size: 18px;
                line-height: 21px;
                color: #4D65A8
            }
        }
        .rodape{
            height: 78px;
            display: flex;
            align-items: flex-end;
            justify-content: space-around;
            span{
                margin-bottom: 5px;
                font-size: 18px;
                line-height: 21px;
                color: #E63C80;
            }
        }
    }

    .dropdown{
        margin-bottom: 7px;
        position: relative;
        width: 290px;
        height: 44px;
        select{
            z-index: 2;
            -moz-appearance:none ;
            -webkit-appearance: none;
            width: 290px;
            height: 44px;
            color: #4D65A8;
            padding: 10px;
            background: rgba(224, 209, 237, 0.62);
            font-family: 'Roboto',sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
        }
        img{
            z-index: 0;
            position: absolute;
            right: 10px;
            bottom: 10px;
            width: 25px;
            height: 25px;
        }
    }

    .check-box{
        width: 290px;
        height: 111px;
        display: flex;
        flex-direction: column;
        text-align: start;
        background: rgba(224, 209, 237, 0.62);
        border-radius: 5px;
        .option{
            display: flex;
            align-items: center;
            margin-left: 10px;
            margin-bottom: 10px;
            margin-right: 50px;
            margin-top: 5px;
            input{
                -webkit-appearance:none;
                appearance: none;
                height: 20px;
                width: 20px;
                background-color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            input:after{
                font-family: "Font Awesome 5 free";
                font-weight: 900;
                font-size: 16px;
                content: "\f00c";
                color: #4D65A8;
                display: none;
            }
            input:checked{
                background-color: #8C97EA;
            }
            input:checked:after{
                display: block;
            }
        }
     
        label{
            font-size: 18px;
            line-height: 21px;
            color: #4D65A8;
            margin-left: 1px;
        }
        form{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        h2{
            padding-top: 3px;
            padding-left: 10px;
            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            color: #4D65A8;
        }
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

export {
    Container,
    StyledButton,
    StyledTitle,
    StyledInput,
    StyledButtonLarge,
    StyledSubTitle,
}