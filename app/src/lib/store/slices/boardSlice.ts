import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal';
import { getBoard } from '../../../repository/boardApi';
import { CardModel } from '../../data/models/cardModel';
import { Column } from '../../data/models/column';
import type { RootState } from '../store'


interface boardState{
    dragging : number | null,
    columns: Array<Column>,
    name : string,
    

}

const initialState : boardState = {
    dragging : null,
    columns:[],
    name : "Загрузка..."
}
//TODO change inital State


export const BoardSlice = createSlice({
    name : 'board',
    initialState,
    reducers : {
        getboard  : (state, action :  PayloadAction<boardState>)  => {
            //TODO call api
            state = action.payload
            return state
            
        },

        pullCard : (state, action :  PayloadAction<number>)  => {
            state.dragging = action.payload
        },

        moveCard : (state, action :  PayloadAction<number>)  => {
            //TODO call api
            let ccard = new CardModel(1,"1");
             
            state.columns.forEach((column , index)=> {
                let newList: WritableDraft<CardModel>[]  = [];
                column.list.forEach(card => {
                    
                    if ( card.id == state.dragging){
                        ccard = card;
                    } else{
                        newList.push(card);
                    }
                });
                state.columns[index].list = newList;              
            });
            
            
            state.columns.forEach((column , index)=> {
                console.log(column, action.payload)
                if (column.id == action.payload){
                    
                    
                    state.columns[index].list.push(ccard);
                }
            });
            state.dragging = null;
            return state;
        }


    }
})


export const { getboard, pullCard, moveCard } = BoardSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBoard = (state: RootState) => state.board
export const SelectDragging = (state : RootState) => state.board.dragging

export default BoardSlice.reducer