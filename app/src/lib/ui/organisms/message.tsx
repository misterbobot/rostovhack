import React from "react";
import styled from "styled-components";
import user from '../../../img/icons/user.png'

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
    display: flex;
`

const MessageAuthor = styled.div`
    color: #cc6600;
    font-weight: bold;
`

const MessageDate = styled.div`
    margin-left: 15%;
    color: #cccccc;
    font-size: small;
    display: flex;
    align-items: center;
`

const UserAva = styled.div`
    display: flex;
`

const MessageTextContainer = styled.div`
    color: #666666;
`

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 0.5%;
`

export const Message:React.FC<MessageProps> = ({author,text,date}) => {

    return <>
    
    <MessageContainer>
        <UserAva><img height="35vh" src={user} /></UserAva>
        <UserInfoContainer>
            <NameDateContainer>
                <MessageAuthor>
                    {author}
                </MessageAuthor>
                <MessageDate>
                    {date}
                </MessageDate>
            </NameDateContainer>
            <MessageTextContainer>
                {text}
            </MessageTextContainer>
        </UserInfoContainer>
    </MessageContainer>
        

    </>

}