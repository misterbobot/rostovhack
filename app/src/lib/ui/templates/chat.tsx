import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled from "styled-components";
import back from "../../../img/backgrounds/chat.png";
import { useAppSelector } from "../../store/hooks";
import { PageDesc } from "../atoms/pageDecs";
import { PageHeader } from "../atoms/pageHeader";
import '../../../css/chat.css';
import micicon from '../../../img/icons/mic.png';
import user from '../../../img/icons/user.png'
import stop from '../../../img/icons/stop.png'
import { Message } from "../organisms/message";


const ChatContainer = styled.div`
  padding-left : 2vw;
  padding-top : 4vh;
`

export const ChatContainerMain = styled.div`
    background-color : rgba(255, 255, 255, 0.74) !important;
    margin-top : 2vh;
    width : 97%;
    margin-left: auto;
    margin-right : auto;
    
`

const MC = styled.div`
  background-image: url(${back});
  background-size: cover;
  min-height: 100vh;
`;

export const Chat: React.FC = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const workspace = useAppSelector((state) => state.navigator.workspace)

  const [recording, setRecording] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    setText(transcript)
  })

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const startRecord = () => {
    SpeechRecognition.startListening()
    setRecording(true)
  }

  const stopRecord = () => {
    SpeechRecognition.stopListening()
    setRecording(false)
  }

  const handleChange = (event : any) =>{

    setText(text+event.target.value)
    
  }



  return (
    <>
      <MC>
        <ChatContainer>
        <PageDesc>Проекты / {workspace?.name}</PageDesc>
        <PageHeader>Чат</PageHeader>
        <ChatContainerMain>
          
          <div>
          </div>
          <div className="main">
        <div className="chat">
          <div className="ChatTitle">Чат {workspace?.name}</div>
          <div className="messages">
            <Message author="Кирилл" text="Тестовое сообщение" date="10:27"/>
            <Message author="Кирилл" text="Тестовое сообщение" date="10:27"/>
            <Message author="Кирилл" text="Тестовое сообщение" date="10:27"/>
            <Message author="Кирилл" text="Тестовое сообщение" date="10:27"/>
          </div>
          <div className="container">
            <textarea className="inputMessage" placeholder="Написать сообщение" defaultValue={""} value={text} onChange={(event) => handleChange(event)} />
            {!recording ? <div onClick = {startRecord} className="niceImg"></div> : <div onClick={stopRecord} className="stopIcon"></div>}
          </div>
        </div>

      </div>
        </ChatContainerMain>

        </ChatContainer>
      </MC>
    </>
  );
};
