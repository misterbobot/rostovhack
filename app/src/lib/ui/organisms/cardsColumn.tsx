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
import { updateColumnTitle } from '../../../repository/boardApi';


const CloumnCard = styled.div`

    display : flex;
    flex-direction:column;
    justify-content : space-between;
    padding : 15px;
    border-radius : 10px;
    border: 1.4px ${theme.palette.border.main} solid;
    background : white;
    flex:3;
    max-width: 400px;
    min-width : 300px;
    & > *{
        margin-top: 0.5vh;
        margin-bottom : 0.5vh;
    }

`

interface CloumnCardInterface{
    name : string;
    id : number;
    list : Array<CardModel>,
}


export const BoardCloumnCard: React.FC<CloumnCardInterface> = ({name,id,list}) => {

    const [editing, setEditing] = useState(false);
    const [col, setCol] = useState(null);

    const dispatch = useAppDispatch()

    const onAddButtonClick = () => {
        setEditing(true);
    }

    const onCancelButtonClick = () =>{
        setEditing(false);
    }
    const handleDragEnter = (e: any, card: any) => {
        e.preventDefault();
        e.stopPropagation();
     
        
        setCol(card.id)
      };
      const handleDragLeave = (e: any,card: any) => {
        e.preventDefault();
        e.stopPropagation();
        
        console.log(card)
        
      };
      const handleDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        
      };

      const handleDragEnd = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        
        
      };

      const handleDrop = (e: any,card:any) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(moveCard(card.id))
      };
    
    const editTitle = (newName : string) => {
      updateColumnTitle(id, newName, dispatch)
    }

    

    return <CloumnCard onDrop={e => handleDrop(e,{id:id}) } 
    onDragOver={e => handleDragOver(e)}
    onDragEnd = {e => handleDragEnd(e)}
    onDragEnter={e => handleDragEnter(e, id)}
    onDragLeave={e => handleDragLeave(e,id)}>
            <CardHeader handleEdit = {editTitle} name = {name}/>
            <CardList list = { list }></CardList>
            {editing ? <CardAdd column={id} cancel={onCancelButtonClick}/> : <AddCardButton click = {onAddButtonClick} />}
        </CloumnCard>
        


}