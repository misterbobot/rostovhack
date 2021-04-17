import React from "react";
import { BoardName } from "../molecules/boardName";
import { NavBar } from "../organisms/navbar";
import styled from 'styled-components';
import { BoardsList } from "../organisms/boardsList";
import back from '../../../img/backgrounds/projects.png'



const BoardsHeader = styled(BoardName)`
    margin-top : 2vh;
    margin-left : 2vw;
    font-weight : 600;
    
`

const MC = styled.div`
background-image : url(${back});
background-size : cover;
min-height:100vh;
`



export const Boards: React.FC = () => {

    return <>
        <MC>
            <NavBar>
                
            </NavBar>
            <BoardsHeader>
                Проекты
            </BoardsHeader>
            <BoardsList></BoardsList>

        </MC>
    </>

}