import React from "react";
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


  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  

  return (
    <>
      <MC>
        <ChatContainer>
        <PageDesc>Проекты / {workspace?.name}</PageDesc>
        <PageHeader>Чат</PageHeader>
        <ChatContainerMain>
          
          <div>
              <button onClick={SpeechRecognition.stopListening}>Stop</button>
              <button onClick={() => SpeechRecognition.startListening()}>
                Start
              </button>
              <button onClick={resetTranscript}>Reset</button>
              <p>{transcript}</p>
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
            <textarea className="inputMessage" placeholder="Написать сообщение" defaultValue={""} />
            <div className="niceImg"></div>
          </div>
        </div>

      </div>
        </ChatContainerMain>

        </ChatContainer>
      </MC>
    </>
  );
};
