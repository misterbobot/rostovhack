import styled , { css} from "styled-components";
import { theme } from "../../styling/theme";

interface cardProps{
    dragging : boolean;
}

export const Card = styled.div<cardProps>`

    padding : 15px;
    border-radius : 10px;
    cursor: move;
    border: ${props => props.dragging ? css`4px ${theme.palette.border.main} solid`: css`2px ${theme.palette.border.main} solid`};
    

`


export const MovingCard = styled.div`

    border: 4px ${theme.palette.primary.main} solid;

`