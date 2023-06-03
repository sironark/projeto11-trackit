import styled from "styled-components";


export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-left:36px;
    padding-right: 36px;
    padding-top: 75px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 200px;
        margin-bottom: 50px;
    };
    input{
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        padding: 11px;
        box-sizing: border-box;
        ::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        };

    };
    button{
        background: #52B6FF;
        border-radius: 4.63636px;
        width: 308px;
        height: 45px;
        border-width: 0;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    };
`   