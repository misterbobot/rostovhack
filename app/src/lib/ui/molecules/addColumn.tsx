import styled from "styled-components"
import { theme } from "../../styling/theme"
import { PlusIcon } from "../atoms/icons/plus"
import React from 'react';

const AddColumnContainer = styled.div`
    border-radius : 10px;
    border : 1px ${theme.palette.border.main} solid;
    padding : 20px;
    cursor : pointer;
    display : flex;
`



export const AddColumn : React.FC = () => {

    return <>
    
    <AddColumnContainer>
        <PlusIcon>
            
        </PlusIcon>
    </AddColumnContainer>
    
    </>

}