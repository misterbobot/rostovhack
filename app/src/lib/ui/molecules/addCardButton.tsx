import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styling/theme'
import { PlusIcon } from '../atoms/icons/plus'
import { CancelButton } from './addingCard'

interface AddCardButtonProps{
    click: any
}

const AddCardButtonMixins = styled.div`
    cursor : pointer;
    color : ${theme.palette.text.disabled};
    font-size : 1.8rem;
    display :  flex;
    flex-direction : row;
    margin-top : 2vh !important;
    align-items : center;
    font-weight : regular;
    &:hover{
        color:#000000
    }
`

const AddIcon = styled(PlusIcon)`
    cursor : pointer;
`

export const AddCardButton : React.FC<AddCardButtonProps> = ({click}) => {


    
    return <>
        <AddCardButtonMixins onClick = {click}>
            <AddIcon>
                
            </AddIcon>
            <div>
                &nbsp;Добавить карточку
            </div>
        </AddCardButtonMixins>
    </>

}