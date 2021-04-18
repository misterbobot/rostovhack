import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageModel } from '../../data/models/message';
import type { RootState } from '../store'


interface MessagesState{
    messages : MessageModel[]
} 

const initialState : MessagesState = {
    messages : [
        new MessageModel(
            "Кирилл",
            "Привет всем!",
            "12:19"
        ),
        new MessageModel(
            "Тимофей",
            "Привет, Кирилл!",
            "12:21"
        ),
        new MessageModel(
            "Максим",
            "Привет, Андрей!",
            "12:29"
        )
    ]
}
//TODO change inital State


export const MessagesSlice = createSlice({
    name : 'messages',
    initialState,
    reducers : {
        pushmessage : (state, action : PayloadAction<MessageModel>) => {
            state.messages.push(action.payload)
        }
    }
})


export const { pushmessage } = MessagesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMessages = (state: RootState) => state.messages

export default MessagesSlice.reducer