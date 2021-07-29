import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 0 1px 3px 0 #888;
    border-radius: 10px;
    margin-bottom: 10px;
    width:250px;
    height:250px;

    img{
        width:100%;
        margin-bottom:4px;
        border-radius: 10px 10px 0px 0px;
    }
    .info-produto{
        padding-top:8px;
    }

    &:hover{
        border-color: 1px solid black;
        transform: scale(1);
        box-shadow: 0 5px 15px rgba(0,0,0,0.6);
    }
`;
