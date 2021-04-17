import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BoardModel } from '../../data/models/boardModel';
import type { RootState } from '../store'


interface BoardsState{
    boards : BoardModel[]
} 

const initialState : BoardsState = {
    boards : []
}
//TODO change inital State


export const BoardsSlice = createSlice({
    name : 'boards',
    initialState,
    reducers : {
        getBoards : (state, action: PayloadAction<BoardsState>) => {
            state.boards = action.payload.boards
        }
    }
})


export const { getBoards } = BoardsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.boards

export default BoardsSlice.reducer