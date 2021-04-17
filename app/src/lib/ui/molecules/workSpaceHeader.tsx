import styled from "styled-components"
import { theme } from "../../styling/theme"
import React from 'react'

const WorkSpaceHeaderContainer = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 2vh;
`

const WorkSpaceHeaderName = styled.div`
    color : ${theme.palette.text.disabled};
    font-size : 2.3rem;
    font-weight : 600;
    margin-bottom: 1vh;
`

const WorkSpaceHeaderDesc = styled.div`
    color : black;
    font-size : 1.8rem;
    font-weight : 300;
    
`

export const WorkSpaceHeader:React.FC = () => {

    return <>
        <WorkSpaceHeaderContainer>
            <WorkSpaceHeaderName>
                Тест
            </WorkSpaceHeaderName>
            <WorkSpaceHeaderDesc>
                Тестовое описани....
            </WorkSpaceHeaderDesc>
        </WorkSpaceHeaderContainer>
    </>

}