import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface WSUser{
    id : number,
    name : string,
    role : string
}

interface WSUsersState{
    users : WSUser[]
} 

const initialState : WSUsersState = {
    users : []
}

export const WSUsersSlice = createSlice({
    name : 'wsusers',
    initialState,
    reducers : {
        addusers : (state, action: PayloadAction<WSUser[]>) => {
            state.users = action.payload
        }
    }
})


export const { addusers } = WSUsersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.wsusers

export default WSUsersSlice.reducer