import { createSlice } from "@reduxjs/toolkit";

const videoMonitorSlice = createSlice({
    name: 'videomonitor',
    initialState: {
        index: 1
    },
    reducers: {
        changeIndexAction(state, { payload }) {
            state.index = payload
        }
    }
})

export const {
    changeIndexAction
} = videoMonitorSlice.actions
export default videoMonitorSlice.reducer