import styled from "styled-components"
import { theme } from "../../styling/theme"
import { DealIcon } from "../atoms/icons/deal"
import { MenuItem } from "../molecules/menuItem"


import deal from '../../../img/icons/deals.png'
import message from '../../../img/icons/message.png'
import board from '../../../img/icons/board.png'
import user from '../../../img/icons/users.png'
import { WorkSpaceHeader } from "../molecules/workSpaceHeader"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selecttab, Tabs } from "../../store/slices/navigatorSlice"

const MenuContainer = styled.div`
background-color : rgba(196, 194, 194, 0.397);
    flex : 1;

    display : flex;
    flex-direction : column;
    padding-left : 2vw;
    
`

const DataContainer = styled.div`
    flex : 1;
`

const ItemsContainer = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 4vh;
    flex:3;
    & > *{
        margin-top : 2vh;
        margin-bottom : 2vh;
    }
`

const Rest = styled.div`
    flex : 5;
`


export const WorkSpaceMenu : React.FC = () => {

    const activeTab = useAppSelector((state) => state.navigator.activeTab)
    const dispatch = useAppDispatch()

    const setActive = (tab : Tabs) => {
        dispatch(
            selecttab(
                tab
            )
        )
    }

    return       <MenuContainer>
                <DataContainer>
                    <WorkSpaceHeader>
                        
                    </WorkSpaceHeader>
                </DataContainer>
                <ItemsContainer>
                    <MenuItem onClidck = {() => setActive(Tabs.board)} active = {activeTab == Tabs.board} icon = {board} text = "Доска"/>
                    <MenuItem onClidck = {() => setActive(Tabs.sales)} active = {activeTab == Tabs.sales} icon = {deal} text = "Сделки"/>
                    <MenuItem onClidck = {() => setActive(Tabs.chat)} active = {activeTab == Tabs.chat} icon = {message} text = "Чат"/>
                    <MenuItem onClidck = {() => setActive(Tabs.users)} active = {activeTab == Tabs.users} icon = {user} text = "Участники"/>
                </ItemsContainer>
                <Rest>
                    &nbsp;
                </Rest>
            </MenuContainer>
       


}