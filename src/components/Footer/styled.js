import styled from "styled-components";

export const MenuBottom = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
    background: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: space-around;

   
    button{
        border: solid 1px #fff;
        background-color: #fff;
        :nth-child(1){
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    :nth-child(3){
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    :nth-child(2){
        width: 91px;
        height: 91px;
        background: #52B6FF;

        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
    }
}


`;