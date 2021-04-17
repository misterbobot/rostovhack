import { useEffect } from "react";
import styled from "styled-components";
import { getBoard } from "../../../repository/boardApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getboard } from "../../store/slices/boardSlice";
import { H2 } from "../atoms/heading";
import { AddColumn } from "../molecules/addColumn";
import { BoardName } from "../molecules/boardName";
import { BoardCloumnCard } from "../organisms/cardsColumn";
import TasksPic from '../../../img/backgrounds/board.png'
import { NavBar } from "../organisms/navbar";

const BoardContent = styled.div`
    padding : 10px 20px;
    background-image : url(${TasksPic});
    height: 960px;
    background-size:cover;

`

const BoardCollumsWrapper = styled.div`

    display : flex;
    flex-direction : row;
    width : 100%;
    justify-content : flex-start;
    align-items : flex-start;
    overflow-y : scroll;
    overflow-x : hidden;
    & > *{
        margin-right : 1vw;
        margin-left : 1vw;
    }

`

export const BoardColumns = () => {

    const board = useAppSelector((state) => state.board)
    const dispatch = useAppDispatch()

    const fetchBoard = async () => {
        const board = await getBoard(3);
        console.log({dragging:null,...board.response})
        dispatch(getboard({dragging:null,newCardName : "",...board.response}));
    }

    useEffect(() => {
        fetchBoard();
        document.title = `Доска ${board.name} раз`;
        
      }, []);
    
    


    return <>
    <div>
            <NavBar></NavBar>
            <BoardContent>
                <BoardName>{board.name}</BoardName>
                <BoardCollumsWrapper>
                    {board.columns.map((col) => <BoardCloumnCard name = {col.name} id={col.id} list = {col.list}/>)}
                    <AddColumn/>
                </BoardCollumsWrapper>
            </BoardContent>
    </div>
    </>
}