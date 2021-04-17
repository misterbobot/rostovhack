import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WorkSpace } from '../../data/models/workspaceModel'
import type { RootState } from '../store'

export enum Tabs{
    board = "Доска",
    sales = "Сделки",
    users = "Участники",
    chat = "Чат"
} 


interface navigatorState {
  workspace : WorkSpace | null,
  activeTab : Tabs | null
}

// Define the initial state using that type
const initialState: navigatorState = {
    workspace: null,
    activeTab : null
}   

export const NavigatorSlice = createSlice({
  name: 'navigator',
  initialState,
  reducers: {
    setworkspace: (state, action: PayloadAction<WorkSpace>) => {
      state.workspace = action.payload;
      state.activeTab = Tabs.board
    },
    selecttab : (state, action: PayloadAction<Tabs>) => {
        state.activeTab = action.payload;
    }
  },
})

export const { setworkspace , selecttab } = NavigatorSlice.actions

export const selectWsp = (state: RootState) => state.navigator.workspace

export default NavigatorSlice.reducer