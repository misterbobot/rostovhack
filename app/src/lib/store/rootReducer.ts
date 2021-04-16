import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counterSlice'
import { UserSlice } from './slices/userSlice'

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    user : UserSlice.reducer
})

export default rootReducer
