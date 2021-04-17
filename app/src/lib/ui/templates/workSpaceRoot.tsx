import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { NavBar } from "../organisms/navbar";
import styled from 'styled-components'
import { WorkSpaceMenu } from "../organisms/workSpaceMenu";
import { theme } from "../../styling/theme";
import { BoardCollumsWrapper, BoardColumns, BoardContent } from "./boardTemplate";
import { BoardName } from "../molecules/boardName";
import { BoardCloumnCard } from "../organisms/cardsColumn";
import { AddColumn } from "../molecules/addColumn";
import { getboard } from "../../store/slices/boardSlice";
import { getBoard } from "../../../repository/boardApi";
import { Tabs } from "../../store/slices/navigatorSlice";

const WorkSpaceMain = styled.div`
    display : flex;
    flex-direction : row;
`

const Menu = styled(WorkSpaceMenu)`
    flex : 2;
    
`

const Content = styled.div`
    flex : 7;
`

export const WorkSpaceRoot : React.FC = () => {

    const dispatch = useAppDispatch()
    const navigator = useAppSelector((state) => state.navigator)
    const history = useHistory()




    useEffect(() => {
        if (!navigator.workspace){
            history.push("/boards")
        }
    }, [])

    return <div>
        <NavBar></NavBar>
        <WorkSpaceMain>
            <Menu/>
            <Content>
            {
                navigator.activeTab == Tabs.board ? <BoardColumns/>: <></>
            }
            </Content>
        </WorkSpaceMain>
    </div>


}