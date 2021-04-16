import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styling'

export const Button = styled.button`
    display: flex;
    padding: 15px 25px;
    background-color: ${theme.palette.secondary.main};
    text-decoration-color: white;
    border-radius: 10px;
    color : ${theme.palette.text.main};
    border:0;
    font-family : ${theme.typography.fontFamily};
    font-weight : 600;
`