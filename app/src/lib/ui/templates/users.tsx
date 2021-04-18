import { useEffect } from "react";
import styled from "styled-components";
import back from '../../../img/backgrounds/users.png'
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addusers } from "../../store/slices/workspaceUsers";
import { theme } from "../../styling/theme";
import { Divider } from "../atoms/divider";
import { PageDesc } from "../atoms/pageDecs";
import { PageHeader } from "../atoms/pageHeader";
import { BoardLeftItem } from "../molecules/boardItemLeft";
import { BoardName } from "../molecules/boardName";
import { BoardsListSubHeader } from "../molecules/boardsListSubHeader";
import { BoardListList, BoardListRight, BoardsListCenter, BoardsListItem, BoardsListLeft, CardText } from "../organisms/boardsList";
import { ItemList } from "../organisms/itemsList";

const UsersContainer = styled.div`
padding-left : 2vw;
padding-top : 4vh;
`;

const MC = styled.div`
background-image : url(${back});
background-size : cover;
min-height:100vh;
`



export const UsersPage : React.FC = () => {

    const wsusers = useAppSelector((state) => state.wsusers)
    const dispatch = useAppDispatch()

    const fetchUsers = async () => {
        dispatch(addusers([{id:2,name:"wdewdew",role:"Админ"},{id:2,name:"wdewdew",role:"Админ"}]))
    }

    useEffect(() => {
        fetchUsers();
        
      }, []);

    return <MC>
        <UsersContainer>
            <PageDesc>
                Проект / Task Manager
            </PageDesc>
            <PageHeader>
                Участники
            </PageHeader>
            <ItemList>
            <BoardsListItem>
                <BoardsListLeft>
                    <BoardsListSubHeader>
                        Имя
                    </BoardsListSubHeader>
                </BoardsListLeft>
                <BoardsListCenter>
                    <BoardsListSubHeader>
                        Роль
                    </BoardsListSubHeader>
                </BoardsListCenter>
                <BoardListRight>
                    <BoardsListSubHeader>
                    &nbsp;
                    </BoardsListSubHeader>
                </BoardListRight>
            </BoardsListItem>
            <Divider color = {theme.palette.border.main}></Divider>
           
            {
                wsusers.users.map(user => <BoardsListItem onClick = {() => console.log(2)}>
                    <BoardsListLeft>
                        <BoardLeftItem name={user.name}/>
                    </BoardsListLeft>
                    <BoardsListCenter>
                        <CardText>{user.role}</CardText>                      
                    </BoardsListCenter>
                    <BoardListRight>
                    <BoardListRight>
                        &nbsp;
                    </BoardListRight>
                    </BoardListRight>
                </BoardsListItem>)
            }

            
            <Divider color = {theme.palette.border.main}></Divider>
            </ItemList>
        </UsersContainer>
    </MC>

}