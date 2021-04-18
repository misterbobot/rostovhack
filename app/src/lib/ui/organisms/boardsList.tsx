import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../styling";
import { Divider } from "../atoms/divider";
import { BoardLeftItem } from "../molecules/boardItemLeft";
import { BoardsListSubHeader } from "../molecules/boardsListSubHeader";
import Dots from '../../../img/icons/dots.png'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBoards } from "../../store/slices/boardsSlice";
import { getBoardsApi } from "../../../repository/boardsApi";
import { useHistory } from "react-router-dom";
import { WorkSpace } from "../../data/models/workspaceModel";
import { setworkspace } from "../../store/slices/navigatorSlice";
import back from '../../../img/backgrounds/projects.png'


export const BoardsListContainer = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;

`

export const BoardsListItem = styled.div`
    display : flex;
    flex-direction : row;
    align-items  : center;
    cursor : pointer;
    margin-top : 0.3vh;
    margin-bottom : 0.3vh;
`

export const BoardsListLeft = styled.div`
    flex:2;
`

export const BoardsListCenter = styled.div`
    flex : 3;
`

export const BoardListRight = styled.div`
    flex : 6;
    display : flex;
    justify-content : flex-end;
    align-items : flex-end;
`

export const BoardListList = styled.div`
    background-color : rgba(255, 255, 255, 0.74) !important;
    display : flex;
    flex-direction : column;
    width : 97%;
    margin-left: auto;
    margin-right : auto;
    
`

export const CardText = styled.div`
text-align : center;
margin-top : 0.4vh;
    color : black;
    font-weight : 500;
    font-size : 1.3rem;
`

export const BoardsList : React.FC = () => {

    const dispatch = useAppDispatch();
    const history = useHistory();


    const gotoWorkSpace = (id : number, name: string) =>{
        dispatch(setworkspace(new WorkSpace(id, name)));
        history.push("/workspace")
        
    }

    useEffect(() => {
        getBoardsApi(dispatch)
        return () => {
            
        }
    }, [])

    const boards = useAppSelector((state)=>state.boards.boards)


    return <>
        <BoardsListContainer>
            <BoardsListItem>
                <BoardsListLeft>
                    <BoardsListSubHeader>
                        Имя
                    </BoardsListSubHeader>
                </BoardsListLeft>
                <BoardsListCenter>
                    <BoardsListSubHeader>
                        Описание
                    </BoardsListSubHeader>
                </BoardsListCenter>
                <BoardListRight>
                    <BoardsListSubHeader>
                    &nbsp;
                    </BoardsListSubHeader>
                </BoardListRight>
            </BoardsListItem>
            <Divider color = {theme.palette.border.main}>frf</Divider>
            <BoardListList>
            {
                boards.map(board => <BoardsListItem onClick = {() => gotoWorkSpace(board.id,board.name)}>
                    <BoardsListLeft>
                        <BoardLeftItem name={board.name}/>
                    </BoardsListLeft>
                    <BoardsListCenter>
                        <CardText>{board.desc}</CardText>                      
                    </BoardsListCenter>
                    <BoardListRight>
                    <BoardListRight>
                        <img src = {Dots}/>
                    </BoardListRight>
                    </BoardListRight>
                </BoardsListItem>)
            }

            </BoardListList>
            <Divider color = {theme.palette.border.main}>frf</Divider>
        </BoardsListContainer>
    </>

}