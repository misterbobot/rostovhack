import React from "react";
import styled from "styled-components";

interface UserInfoProps{
    author : string;
    text : string;
    date : string;
}

const UserOnfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 0.5%;
`

export const UserInfo : React.FC<UserInfoProps> = () => {

    return <>
        <UserOnfoContainer>
            
        </UserOnfoContainer>
    </>

}