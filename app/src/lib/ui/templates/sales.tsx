import React from "react";
import styled from "styled-components";
import back from '../../../img/backgrounds/sales.png'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PageDesc } from "../atoms/pageDecs";
import { PageHeader } from "../atoms/pageHeader";

const MC = styled.div`
background-image : url(${back});
background-size : cover;
min-height:100vh;
`

const SalesContainer = styled.div`
    padding : 3vw;
`


export const Sales : React.FC = () => {

    const dispatch = useAppDispatch()
    const workspace = useAppSelector((state) => state.navigator.workspace)

    return (
        <MC>
            <SalesContainer>
                <PageDesc>
                    Проекты / {workspace?.name}
                </PageDesc>
                <PageHeader>
                    Сделки
                </PageHeader>
                
            </SalesContainer>
        </MC>
    )

}