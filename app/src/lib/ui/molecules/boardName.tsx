import { H4 } from '../atoms/heading'
import styled from 'styled-components'
import { theme } from '../../styling/theme'

export const BoardName = styled(H4)`
    color : ${theme.palette.text.secondary};
    margin-bottom : 6vh;
    margin-left : 1vw;
    margin-top : 6vh;
    font-weight: 500;
`