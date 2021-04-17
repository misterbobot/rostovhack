import { combineReducers } from '@reduxjs/toolkit'
import {BoardSlice} from './slices/boardSlice'
import { BoardsSlice } from './slices/boardsSlice'
import { counterSlice } from './slices/counterSlice'
import { UserSlice } from './slices/userSlice'

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    user : UserSlice.reducer,
    board : BoardSlice.reducer,
    boards : BoardsSlice.reducer
})

export default rootReducer
