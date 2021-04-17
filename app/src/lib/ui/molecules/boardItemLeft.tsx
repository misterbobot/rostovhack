import React from "react";
import styled from "styled-components";
import { H6 } from "../atoms/heading";
import Circle from '../../../img/icons/circle.png'
import { theme } from "../../styling/theme";

interface BoardLeftItemProps{
    name : string
}

const BoardLeftItemContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    margin-top : 0.5vh;
    margin-bottom :  0.5vh;
`

const BoardLeftItemContainerIcon = styled.div`
    padding-left:3vw;
    flex : 1;
`
const BoardLeftItemContainerText = styled(H6)`
    font-size : 1.4rem;
    flex : 5;
    color : ${theme.palette.secondary.main};
`

export const BoardLeftItem : React.FC<BoardLeftItemProps> = ({name}) => {

    return <>
        <BoardLeftItemContainer>
            <BoardLeftItemContainerIcon>
                <img src = {Circle}></img>
            </BoardLeftItemContainerIcon>
            <BoardLeftItemContainerText>
                {name}
            </BoardLeftItemContainerText>
        </BoardLeftItemContainer>
    </>

}