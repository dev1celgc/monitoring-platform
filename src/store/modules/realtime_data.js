import { createSlice } from "@reduxjs/toolkit";

const timeDataSlice = createSlice({
    name: 'timeData',
    initialState: {
        //当前展示的传感器数组信息
        dataShowList: [],
        dataIndex: 1,
    },
    reducers: {
        changeDataShowListAction(state, { payload }) {
            state.dataShowList = payload
        },
        changeDataIndexAction(state, { payload }) {
            state.dataIndex = payload
        }                             
    }
})

export const {
    changeDataShowListAction,
    changeDataIndexAction
} = timeDataSlice.actions

export default timeDataSlice.reducer