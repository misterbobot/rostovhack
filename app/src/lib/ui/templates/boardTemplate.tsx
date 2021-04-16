import styled from "styled-components";
import { BoardCloumnCard } from "../organisms/cardsColumn";

const BoardCollumsWrapper = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    justify-content : flex-start;
    align-items : flex-start;
    
    & > *{
        margin-right : 1vw;
        margin-left : 1vw;
    }

`

export const BoardColumns = () => {

    return <BoardCollumsWrapper>
        <BoardCloumnCard name = " TODO" id={2}>
            
        </BoardCloumnCard>
        <BoardCloumnCard name = " DONE" id={3}>
            
        </BoardCloumnCard>
    </BoardCollumsWrapper>

}