import React from 'react'
import { CardHeader } from './cardHeader'
import { MyInput } from '../atoms/input'
import { Button } from '../atoms/button'
import { AddCardButtons } from './addCardButtons'
import { CancelIcon } from '../atoms/icons/cancel'
import styled from 'styled-components'

interface CardAddProps{
    cancel : any
}

const AddButton = styled(Button)`
    margin-right : 1vw;
    flex : 4;
`

const CancelButton = styled(CancelIcon)`
    cursor : pointer;
`

const ButtonContainer = styled.div`
    flex: 4;
`

export const CardAdd : React.FC<CardAddProps> = ({cancel}) =>{

    return <>
        <MyInput placeholder = "Введите заголовок этой карточки"></MyInput>
        <AddCardButtons>
            <AddButton> Добавить карточку</AddButton>
            <ButtonContainer onClick =  {cancel}>
                <CancelButton />
            </ButtonContainer>
            
        </AddCardButtons>
        
    </>
}