import { combineReducers } from '@reduxjs/toolkit'
import {BoardSlice} from './slices/boardSlice'
import { counterSlice } from './slices/counterSlice'
import { UserSlice } from './slices/userSlice'

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    user : UserSlice.reducer,
    board : BoardSlice.reducer
})

export default rootReducer
