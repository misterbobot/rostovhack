import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface UserState{
    token : string | null,
    loggedIn : boolean
} 

const initialState : UserState = {
    token : null,
    loggedIn : false
}
//TODO change inital State

interface UserLogin{
    email : string,
    password : string
}

export const UserSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        login : (state, action: PayloadAction<UserLogin>) => {
            //TODO call api
            state.loggedIn = true;
            state.token = "token";
        }
    }
})


export const { login } = UserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default UserSlice.reducer