import React from "react";
import styled from "styled-components";
import { theme } from "../../styling/theme";
import { H4, HeaderColors } from '../atoms/heading'

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    color : ${theme.palette.text.secondary};
    align-items : center;
`


export const Logo : React.FC = () =>{
    return <>
        <LogoContainer>
            <H4 color={HeaderColors.secondary}>EASY</H4>
            &nbsp;
            <div >COOPERATION</div>
        </LogoContainer>
    </>
}