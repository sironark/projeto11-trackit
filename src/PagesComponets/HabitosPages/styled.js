import styled from "styled-components";



export const NavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img:nth-child(1){
        position: absolute;
        width: 97px;
        height: 49px;
        left: 18px;
        top: 10px;
    };
    div{
        position: absolute;
        width: 51px;
        height: 51px;
        left: 306px;
        top: 9px;

        background: url(/src/assets/Rectangle14.png);
        border-radius: 98.5px;
    };
`;

export const AddHabitos = styled.div`
    margin-top: 75px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    };

    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: solid 1px #E5E5E5;

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 26.976px;
            line-height: 35px;
            text-align: center;
            color: #FFFFFF;};
        
    };
   
`;

export const AvisoHabitos = styled.p`

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;

`;

export const PageContainerHabitos = styled.div`
   width: 100%;
   height: 100%;
   background:#F2F2F2;
   padding: 17px;
   box-sizing: border-box;
   position: absolute;
   top:0;
   left: 0;

`;

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