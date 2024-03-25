import { createSlice } from "@reduxjs/toolkit";

const alarmDataSlice = createSlice({
    name: 'alarmdata',
    initialState: {
        index: 1,
    },
    reducers: {
        changeIndexAction(state, { payload }) {
            state.index = payload
        }
    }
})

export const {
    changeIndexAction
} = alarmDataSlice.actions

export default alarmDataSlice.reducer