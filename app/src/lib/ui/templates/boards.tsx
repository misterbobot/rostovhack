import React from "react";
import { BoardName } from "../molecules/boardName";
import { NavBar } from "../organisms/navbar";
import styled from 'styled-components';
import { BoardsList } from "../organisms/boardsList";

const BoardsHeader = styled(BoardName)`
    margin-top : 2vh;
    margin-left : 2vw;
    
`

export const Boards: React.FC = () => {

    return <>
        <div>
            <NavBar>
                
            </NavBar>
            <BoardsHeader>
                Проекты
            </BoardsHeader>
            <BoardsList></BoardsList>

        </div>
    </>

}