import styled from 'styled-components';


export const Header = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    background: #0C1526;
    height: 220px;
    color:#fff;
    padding: 20px;
    text-align:center;

    section{
        width:100%;
        border: 5px #fff double;
        padding: 10px;
    }

    button{
        background:#324873;
        border-radius: 20px;
        height: 40px;
        border: 0;
        padding: 0 16px;
        color: #fff;
        width: 160px;
        font-weight: 500;
        margin-top: 16px;
        box-shadow: 1px 1px 1px #C6C4F2;
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


