import styled from "styled-components";
import { Color } from "../../styling/classes/Color";
import PalleteColor from "../../styling/classes/PalleteColor";

interface DividerProps{
    color : string
}

export const Divider = styled.div<DividerProps>`
    height : 0.15vh;
    background-color : ${props=> props.color};
    margin-top : 10px;
`