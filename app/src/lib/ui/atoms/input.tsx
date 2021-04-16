import React from 'react'
import styled, { css } from 'styled-components'
import { Color } from '../../styling/classes/Color'
import PalleteColor from '../../styling/classes/PalleteColor'
import { theme } from '../../styling/theme'

interface InputProps{

    color ?: Color | PalleteColor;
    borderColor ?: Color | PalleteColor;

}

export const MyInput = styled.input<InputProps>`
    ${({theme,color,borderColor, ...props}) => {
        const getTextColor = color ? color.main : theme.palette.text.secondary;
        const geBborderColor = borderColor ? borderColor.main : theme.palette.secondary.main;
        return css`

            border-radius : 10px;
            border: 2px ${theme.palette.border.main} solid;
            padding : 10px 20px;
            line-height: 50px;
            font-family : ${theme.typography.fontFamily};
            
            ::placeholder{
                
                color : ${theme.palette.border.main};
                font-size: 1.2vw;
                line-height: 140%;
                font-family : ${theme.typography.fontFamily};
            }
        `
    }}
`