import React from 'react'
import { useSpeechRecognition } from 'react-speech-recognition';
import { LoginPage } from '../ui/templates/loginPage'


export const loginPage: React.FC = () => {

    const { transcript, resetTranscript } = useSpeechRecognition();

    return <>

            <LoginPage></LoginPage>
        
    </>

}