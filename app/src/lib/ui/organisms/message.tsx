import React from "react";
import styled from "styled-components";

interface MessageProps{
    author : string;
    text : string;
    date : string;
}

const MessageContainer = styled.div`

    display: flex;
    flex-direction: row;
    margin-top: 3%;

`


const NameDateContainer = styled.div`

`

const MessageTextContainer = styled.div`

`

export const Message:React.FC<MessageProps> = ({author,text,date}) => {

    return <>
    
    <MessageContainer>
        
    </MessageContainer>
        

    </>

}