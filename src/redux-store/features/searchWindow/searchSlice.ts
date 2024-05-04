import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'


interface ISearchSlice{
    isOpen: boolean
}

const initialState: ISearchSlice = {
    isOpen: false
}

export const searchSlice = createSlice({
    name : "search window",
    initialState,
    reducers:{
        toggleSearchWindow: (state) => {
            state.isOpen =!state.isOpen
        }
    }
})

export const {toggleSearchWindow} = searchSlice.actions
export default searchSlice.reducer;