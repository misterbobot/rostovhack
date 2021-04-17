import React from 'react'
import { theme } from '../../styling'
import { H4, HeaderColors } from '../atoms/heading'



interface CardHeaderProps{
    name : string,
    handleEdit : any
}

export const CardHeader : React.FC<CardHeaderProps> = ({name,handleEdit}) => {

    return <>
        <H4  color = {HeaderColors.secondary}>
            <div contentEditable="true"  onInput={e => handleEdit(e.currentTarget.textContent)} >{name}</div>
        </H4>
    </>

}