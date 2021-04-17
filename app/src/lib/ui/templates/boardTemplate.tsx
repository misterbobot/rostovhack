import { useEffect } from "react";
import styled from "styled-components";
import { getBoard } from "../../../repository/boardApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getboard } from "../../store/slices/boardSlice";
import { AddColumn } from "../molecules/addColumn";
import { BoardCloumnCard } from "../organisms/cardsColumn";



const BoardCollumsWrapper = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    justify-content : flex-start;
    align-items : flex-start;
    overflow-y : scroll;
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
    
    


    return <BoardCollumsWrapper>
        {board.columns.map((col) => <BoardCloumnCard name = {col.name} id={col.id} list = {col.list}/>)}
        <AddColumn/>
    </BoardCollumsWrapper>

}