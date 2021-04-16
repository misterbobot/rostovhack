import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { CardHeader } from '../molecules/cardHeader';
import {theme} from '../../styling/theme'
import { MyInput } from '../atoms/input';
import { CardAdd } from '../molecules/addingCard';
import { AddCardButton } from '../molecules/addCardButton';
import { CardList } from '../molecules/cardList';
import internal from 'node:stream';
import { Column } from '../../data/models/column';
import { CardModel } from '../../data/models/cardModel';
import { useAppDispatch } from '../../store/hooks';
import { moveCard } from '../../store/slices/boardSlice';


const CloumnCard = styled.div`

    display : flex;
    flex-direction:column;
    justify-content : space-between;
    padding : 15px;
    border-radius : 10px;
    border: 2px ${theme.palette.border.main} solid;
    flex:3;
    max-width:35%;
    & > *{
        margin-top: 0.5vh;
        margin-bottom : 0.5vh;
    }

`

interface CloumnCardInterface{
    name : string;
    id : number;
    list : Array<CardModel>
}


export const BoardCloumnCard: React.FC<CloumnCardInterface> = ({name,id,list}) => {

    const [editing, setEditing] = useState(false);

    const dispatch = useAppDispatch()

    const onAddButtonClick = () => {
        setEditing(true);
    }

    const onCancelButtonClick = () =>{
        setEditing(false);
    }
    const handleDragEnter = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
      };
      const handleDragLeave = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
      };
      const handleDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
      };
      const handleDrop = (e: any,card:any) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(moveCard(card.id))
      };

    

    return <CloumnCard onDrop={e => handleDrop(e,{id:id})} 
    onDragOver={e => handleDragOver(e)}
    onDragEnter={e => handleDragEnter(e)}
    onDragLeave={e => handleDragLeave(e)}>
            <CardHeader name = {name}/>
            <CardList list = { list }></CardList>
            {editing ? <CardAdd cancel={onCancelButtonClick}/> : <AddCardButton click = {onAddButtonClick} />}
        </CloumnCard>
        


}