import { createSlice } from "@reduxjs/toolkit";

const operationRecordSlice = createSlice({
    name: 'operationRecord',
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
} = operationRecordSlice.actions

export default operationRecordSlice.reducer