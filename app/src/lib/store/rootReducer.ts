import { combineReducers } from '@reduxjs/toolkit'
import {BoardSlice} from './slices/boardSlice'
import { BoardsSlice } from './slices/boardsSlice'
import { counterSlice } from './slices/counterSlice'
import { NavigatorSlice } from './slices/navigatorSlice'
import { UserSlice } from './slices/userSlice'
import { WSUsersSlice } from './slices/workspaceUsers'

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    user : UserSlice.reducer,
    board : BoardSlice.reducer,
    boards : BoardsSlice.reducer,
    navigator : NavigatorSlice.reducer,
    wsusers: WSUsersSlice.reducer
})

export default rootReducer