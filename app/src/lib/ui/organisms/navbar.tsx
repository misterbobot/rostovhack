import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styling/theme";
import { Logo } from "../molecules/logo";

interface NavBarProps{
    hidden ?: boolean
}

const NavBarMain = styled.div`
    width : 98%;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content: flex-start;
    background-color : white;
    
    padding-top : 2vh;
    padding-bottom : 2vh;
    margin-left:1vw;
    margin-right:1vw;
    & > *{
        margin-right : 7vw;
    }
    
`

const NavBarProjects = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: #cc6600;
    color: #cc6600;
    margin-top: 1%;
    margin: 0;
    align-items : center;
    background-color: white;
`

const NavBarCreate = styled.div`
    display: flex;
    
    background-color: #cc6600;
    color: white;
    text-align: center;
    margin-left: 5%;
    align-items : center;
    padding: 0.75% 3%;
    border-radius: 10px;
`

const NavBarOutline = styled.div`
    background-color : ${theme.palette.border.main};
    height: 2px;
    width : 100%;

`

export const NavBar:React.FC<NavBarProps> = ({hidden}) => {

    const history = useHistory();

    return <>
        <div>
            <NavBarMain>
                <Logo/>
                {(hidden && hidden == true) ? <></> : <><NavBarProjects onClick={()=>history.push('/boards')}>
                    Проекты
                </NavBarProjects>
                <NavBarCreate>
                    Создать
                </NavBarCreate></>} 

            </NavBarMain>
            <NavBarOutline></NavBarOutline>
        </div>
    </>

}