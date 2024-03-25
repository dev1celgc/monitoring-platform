import { createSlice } from "@reduxjs/toolkit"

const notificationRecordSlice = createSlice({
    name: 'notificationRecord',
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
} = notificationRecordSlice.actions

export default notificationRecordSlice.reducer