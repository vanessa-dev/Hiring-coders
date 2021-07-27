import styled from 'styled-components';
import background from "../../assets/background.jpg";

export const Header = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    background: #000;
    height: 100%;
    color:#fff;
    padding: 20px;
    text-align:center;
    width: 100%;

    h1{
        font-size: 1.7rem;
        padding-bottom:4px;
    }

    p{
        padding-bottom: 2px;
    }

    section{
        width:100%;
        border: 5px #fff double;
        padding: 10px;
    }

    a{
        background:#BF0426;
        border-radius: 5px;
        height: 40px;
        padding: 0 16px;
        color: #fff;
        line-height:40px;
        font-weight: 500;
        margin-top: 16px;
        box-shadow: 0 1px 3px 0 ##BF0424;
    }

`;

export const Cronometro = styled.div`
    display:flex;
    flex-direction:column;
    padding-top: 15px;
`;

export const Time = styled.div`
    display:inline-block;
    width:54px;
    height:54px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 4px;
    color: #000;
    line-height:54px;
`;

export const ContainerProduto = styled.div`
    margin-top:4px;

    h4{
        text-align:center;
        margin-bottom: 4px;
    }

    .list{
        display:flex;
        flex-direction: column;
        align-items:center;

        @media(min-width:768px){
        flex-direction: row;
        justify-content:space-around;
        }
    }

`;

export const ContainerCadastro = styled.div`
    background:  linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${background}) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height:250px;
    opacity:.8;
    display: flex;
    flex-direction: column;
    color:#fff;
    padding: 2px 8px;

    .descricao{
        margin-bottom: 15px;
        align-self:center;
    }

    .formulario{
        input{
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;
            box-sizing: border-box;
            align-items: center;
            margin-bottom: 8px;
            &::placelholder{
                color:  #fff;
            }
        }

        button{
            background:#BF0426;
            border-radius: 5px;
            border:none;
            height: 40px;
            padding: 0 50px;
            color: #fff;
            line-height:40px;
            font-weight: 500;
            box-shadow: 0 1px 3px 0 #BF0424;
            float:right;
        }
    }

    @media(min-width:768px){
        flex-direction: row;
        justify-content: space-around;
        align-items:center;
    }
`;


export const Rodape = styled.div`
    background:#000;
    color:#fff;
    padding: 8px 0;
    text-align:center;
`;
