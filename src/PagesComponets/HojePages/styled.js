import styled from "styled-components";

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

export const PercentHabit = styled.div`
    margin-top: 70px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    
    align-items: initial;
    

    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    };
    h3{
      font-style: normal;
      font-weight: 400;
      font-size: 17.976px;
      line-height: 22px;
      color: ${props => props.concluidos == 0 ? '#BABABA' : "#8FC549"};

    }
`


export const ListaHabitos = styled.ul`
        padding-bottom: 90px;
        box-sizing: border-box;
    

`
export const SCli = styled.li`


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

        div{
         
         margin-top: 10px;
         display: flex;
         flex-direction: column;

         ul{
            display: flex;
         font-style: normal;
         font-weight: 400;
         font-size: 12.976px;
         line-height: 16px;

         color: #666666;
         
        }

        h4{
            color:${(props) => props.arrChecked.includes(props.idHabito) ? "#8FC549" : props.doneHabito == true ? "#8FC549" : "#666666"} ;
         }
         h5{
            color:${(props) => props.currentSequence == 0 ?"#666666" : props.currentSequence==props.highestSequence ? "#8FC549" : "#666666" } ;
         }
        }

        span{
      
            position: absolute;
            width: 69px;
            height: 69px;
            right: 11px;
            top:13px;

            background:${(props) => props.arrChecked.includes(props.idHabito) ? "#8FC549" : props.doneHabito == true ? "#8FC549" : "#EBEBEB"} ;
            border: 1px solid #E7E7E7;
            border-radius: 5px;

            img{
            position: absolute;
            right: 16px;
            top:18px;

        }
         }
        

        
        
       
        
    `