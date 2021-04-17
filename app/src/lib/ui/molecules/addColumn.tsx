import styled from "styled-components"
import { theme } from "../../styling/theme"
import { PlusIcon } from "../atoms/icons/plus"
import React from 'react';
import { useAppDispatch } from "../../store/hooks";
import { createColumnApi } from "../../../repository/boardApi";

const AddColumnContainer = styled.div`
    border-radius : 10px;
    border : 1px ${theme.palette.border.main} solid;
    padding : 20px;
    cursor : pointer;
    display : flex;
    background : white;
`



export const AddColumn : React.FC = () => {

    const dispatch = useAppDispatch();

    return <>
    <div onClick = {() => createColumnApi(dispatch)}>
        <AddColumnContainer>
            <PlusIcon>
                
            </PlusIcon>
        </AddColumnContainer>
    </div>
    
    </>

}