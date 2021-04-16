import { Card } from "../atoms/card"
import { H5 } from "../atoms/heading"
import React from 'react'
import styled from "styled-components"
import { theme } from "../../styling"

const CardListWrapper = styled.div`

    display:flex;
    flex-direction : column;

`

const CardInner = styled(H5)`

    color : ${theme.palette.text.secondary};

`

export const CardList : React.FC = () => {

    return <>
        <Card draggable = "true">
            <CardInner>
                Test
            </CardInner>
        </Card>
        <Card>
            <CardInner>
                Test
            </CardInner>
        </Card>
    </>

}