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
    img:nth-child(2){
        position: absolute;
        width: 51px;
        height: 51px;
        left: 306px;
        top: 9px;

        
        border-radius: 98.5px;
    };
`;