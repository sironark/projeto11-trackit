import styled from "styled-components";



export const NavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 1;

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
    margin-top: 50px;
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


export const ListaHabitos = styled.ul`
        padding-bottom: 90px;
        box-sizing: border-box;
    li{
        width: 340px;
        height: 100px;
        background: #FFFFFF;
        border-radius: 5px;
        padding: 13px;
        box-sizing: border-box;
        position: relative;
        margin-bottom: 10px;
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
        }
        
        img{
            position: absolute;
            right: 11px;
            top:11px;
        }
        div{
            display: flex;
           
        }
    }

`


export const SCMapLi = styled.div` 
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                margin-top: 10px;
                
                background: ${props => props.meusHabitos.includes(props.index)? "#CFCFCF" : "#fff"};
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                margin-right: 5px ;

                font-weight: 500;
                font-size: 19.976px;
                line-height: 27px;
                color:${props => props.meusHabitos.includes(props.index)? "#fff" : "#DBDBDB"}; ;
                text-align: center;
            `

export const ConfigAdd = styled.form`
    width: 340px;
    height: 180px;
    position: relative;

    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 29px;
    display: ${props => props.expHadicionar==false ? "none" : "flex"};
    flex-direction: column;
    padding: 18px;
    box-sizing: border-box;

    span{
        position: absolute;
        right: 0;
        bottom: 16px;
        display: flex;
        align-items: center;
        margin-right: 15px;
        p{
           
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;

            text-align: center;
            color: #52B6FF;
            margin-right: 23px;
        }
            button{
                width: 84px;
                height: 35px;
                background: #52B6FF;
                border-radius: 4.63636px;

                font-style: normal;
                font-weight: 400;
                font-size: 15.976px;
                line-height: 35px;
                text-align: center;
                color: #FFFFFF;
                border: solid 1px #fff;
            };
        };
    

    input{
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        width: 100%;
        height: 45px;
        margin-bottom: 6px;
        padding: 11px;
        box-sizing: border-box;

        ::placeholder{
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        }
    };

   
`;
export const SCul = styled.ul`

    display: flex;
     


`;
export const SCli = styled.li`
            width: 30px;
            height: 30px;
            
            background: ${props => props.arrDiaSemana.includes(props.index)? "#CFCFCF" : "#fff"};
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            margin-right: 5px ;

            font-weight: 500;
            font-size: 19.976px;
            line-height: 25px;
            color: ${props => props.arrDiaSemana.includes(props.index)? "#fff" : "#DBDBDB"};
            text-align: center;
            
`;

export const PageContainerHabitos = styled.div`
   width: 100%;
   height: 100%;
   background:#F2F2F2;
   padding-top: 17px;
   padding-right: 17px;
   padding-left: 17px;
   padding-bottom: 30px;
  

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