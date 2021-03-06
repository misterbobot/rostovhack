import { Card } from "../atoms/card"
import { H5 } from "../atoms/heading"
import React from 'react'
import styled from "styled-components"
import { theme } from "../../styling"
import { CardModel } from "../../data/models/cardModel"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { pullCard, SelectDragging } from "../../store/slices/boardSlice"
import { store } from "../../store/store"


interface CardListProps{
    list : Array<CardModel>
}

const CardListWrapper = styled.div`

    display:flex;
    flex-direction : column;

`

const CardInner = styled(H5)`

    color : ${theme.palette.text.secondary};

`

export const CardList : React.FC<CardListProps> = ({list}) => {

    const dispatch = useAppDispatch()

    const dragging = useAppSelector((state) => state.board.dragging)

    const handleDragStart = (e: any, id : number) => {
        dispatch(pullCard(id))
        console.log(id,"ID");
      };    

    return <>
        {list.map((card)=>
        <Card onDragStart = {e => handleDragStart(e,card.id) } draggable = "true" key = {card.id} dragging  = {dragging == card.id}>
            <CardInner>
                {card.text}
            </CardInner>
        </Card>)}
    </>

}