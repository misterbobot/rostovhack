import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styling/theme";


interface MenuItemProps{
    active : boolean,
    text : string,
    icon : string,
    onClidck : () => void
}

const ItemContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : flex-start;
    cursor : pointer;
    
`

const Icon = styled.div`
    
    margin-right : 1vw;
`

interface mytxtProps{
    active : boolean
}

const Txxt = styled.div<mytxtProps>`
    font-size : 2rem;
    font-weight : 500;
    color : ${props =>props.active ? theme.palette.secondary.main : css`black`};
    
`

export const MenuItem : React.FC<MenuItemProps> = ({active,icon,text,onClidck}) => {
    
    return <ItemContainer onClick = {onClidck}>
            <Icon>
                <img src = {icon} ></img>
            </Icon>
            <Txxt active = {active}>
                {text}
            </Txxt>
        </ItemContainer>
    
}