import React from 'react'
import { theme } from '../../styling'
import { H4, HeaderColors } from '../atoms/heading'
import styled from 'styled-components'


interface CardHeaderProps{
    name : string,
    handleEdit : any
}

const Ch = styled(H4)`

    font-size : 1.8rem;
    line-height : 100%;
    margin-bottom : 3vh !important;

`

export const CardHeader : React.FC<CardHeaderProps> = ({name,handleEdit}) => {

    return <>
        <Ch  color = {HeaderColors.secondary}>
            <div contentEditable="true"  onInput={e => handleEdit(e.currentTarget.textContent)} >{name}</div>
        </Ch>
    </>

}