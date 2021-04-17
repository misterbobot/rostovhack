import React from 'react'
import styled from 'styled-components'
import LoginBack from '../../../img/backgrounds/login.png'


export const LoginBackground = styled.div`
    position: absolute;
    left: 7%;
    bottom: 1%;
    width: 40%;
    height: 80%;
    background-image: url(${LoginBack});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: bottom left;
`