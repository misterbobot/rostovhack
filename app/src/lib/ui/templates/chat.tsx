import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled from "styled-components";
import back from "../../../img/backgrounds/chat.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PageDesc } from "../atoms/pageDecs";
import { PageHeader } from "../atoms/pageHeader";
import '../../../css/chat.css';
import micicon from '../../../img/icons/mic.png';
import user from '../../../img/icons/user.png'
import stop from '../../../img/icons/stop.png'
import { Message } from "../organisms/message";
import { pushmessage } from "../../store/slices/messagesSlice";
import { MessageModel } from "../../data/models/message";


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

  const messages = useAppSelector((state) => state.messages.messages)
  const dispatch = useAppDispatch()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const startRecord = () => {
    
    SpeechRecognition.startListening()
    setRecording(true)
  }

  const stopRecord = () => {
    SpeechRecognition.stopListening()
    setText(text + transcript)
    setRecording(false)
    resetTranscript()
    
  }

  const handleChange = (event : any) =>{

    setText(event.target.value)
    
  }

  const handleKeyPress = (event : any) => {
    if(event.key === 'Enter'){
      var today = new Date()
      dispatch(pushmessage(
        new MessageModel(
          "????",
          text,
          today.getHours() + ':' + today.getMinutes()
        )
      ))
      
      setText("")
    }
  }





  return (
    <>
      <MC>
        <ChatContainer>
        <PageDesc>?????????????? / {workspace?.name}</PageDesc>
        <PageHeader>??????</PageHeader>
        <ChatContainerMain>
          
          <div>
          </div>
          <div className="main">
        <div className="chat">
          <div className="ChatTitle">?????? {workspace?.name}</div>
          <div className="messages">
          {
            messages.map((message) =>              
              <Message author={message.author} text={message.text} date={message.date}/>
            )
          }
          </div>
          <div className="container">
            <textarea onKeyPress={(event) => handleKeyPress(event)} className="inputMessage" placeholder="???????????????? ??????????????????" defaultValue={""} value={recording ? text+transcript:text} onChange={(event) => handleChange(event)} />
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
