import React from 'react'
import { theme } from '../../styling'
import { H4, HeaderColors } from '../atoms/heading'

interface CardHeaderProps{
    name : string
}

export const CardHeader : React.FC<CardHeaderProps> = ({name}) => {

    return <>
        <H4 color = {HeaderColors.secondary}>
            {name}
        </H4>
    </>

}