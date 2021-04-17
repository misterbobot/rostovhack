import React from 'react'
import { CardHeader } from './cardHeader'
import { MyInput } from '../atoms/input'
import { Button } from '../atoms/button'
import { AddCardButtons } from './addCardButtons'
import { CancelIcon } from '../atoms/icons/cancel'
import styled from 'styled-components'
import { useAppSelector,useAppDispatch } from '../../store/hooks'
import { addcard, changecardname } from '../../store/slices/boardSlice'
import { AddCardApi } from '../../../repository/boardApi'

interface CardAddProps{
    cancel : any,
    column : number
}

const AddButton = styled(Button)`
    margin-right : 1vw;
    cursor : pointer;
    flex : 4;
    text-align : center;
`

export const CancelButton = styled(CancelIcon)`
    cursor : pointer;
`

const ButtonContainer = styled.div`
    flex: 4;
    cursor : pointer;
    
`

export const CardAdd : React.FC<CardAddProps> = ({cancel,column}) =>{


    const dispatch = useAppDispatch()
    const inputVal = useAppSelector((state) => state.board.newCardName)

    const handleChange = (e:any) => {
        dispatch(changecardname(e.target.value))
    }

    const addCard = (e : any) => {
        AddCardApi(column, dispatch)
        cancel()
    }

    return <>
        <MyInput value = {inputVal} onChange = {event => {handleChange(event)}} placeholder = "Введите заголовок этой карточки"/>
        <AddCardButtons>
            <AddButton onClick = {addCard}> Добавить карточку</AddButton>
            <ButtonContainer onClick =  {cancel}>
                <CancelButton />
            </ButtonContainer>
            
        </AddCardButtons>
        
    </>
}