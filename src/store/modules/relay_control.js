import { createSlice } from "@reduxjs/toolkit";
import MyButton from "@/views/online_monitor/relay_control/components/button";
import StateButton from "@/views/online_monitor/relay_control/components/state_button";
const relayControlSlice = createSlice({
    name: 'relaycontrol',
    initialState: {
        index: 1,
        nosieList: {
            "code": 1000,
            "message": "获取成功",
            "data": [
                {
                    "deviceAddr": 21068083,
                    "relayNo": 1,
                    "relayName": "继电器1",
                    "enabled": true,
                    "deviceName": "室外噪声传感器",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 1
                },
                {
                    "deviceAddr": 21068083,
                    "relayNo": 2,
                    "relayName": "继电器2",
                    "enabled": true,
                    "deviceName": "室外噪声传感器",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 2
                },
                {
                    "deviceAddr": 21068083,
                    "relayNo": 3,
                    "relayName": "继电器3",
                    "enabled": true,
                    "deviceName": "室外噪声传感器",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 3
                },
                {
                    "deviceAddr": 21068083,
                    "relayNo": 4,
                    "relayName": "继电器4",
                    "enabled": true,
                    "deviceName": "室外噪声传感器",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 4
                },
                {
                    "deviceAddr": 21068083,
                    "relayNo": 5,
                    "relayName": "继电器5",
                    "enabled": true,
                    "deviceName": "室外噪声传感器",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 5
                },
                {
                    "deviceAddr": 21068083,
                    "relayNo": 6,
                    "relayName": "继电器6",
                    "enabled": true,
                    "deviceName": "室外噪声传感器",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 6
                },
                {
                    "deviceAddr": 21068083,
                    "relayNo": 7,
                    "relayName": "继电器7",
                    "enabled": true,
                    "deviceName": "室外噪声传感器",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 7
                },
                {
                    "deviceAddr": 21068083,
                    "relayNo": 8,
                    "relayName": "继电器8",
                    "enabled": true,
                    "deviceName": "室外噪声传感器",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 8
                }
            ]
        },
        airList: {
            "code": 1000,
            "message": "获取成功",
            "data": [
                {
                    "deviceAddr": 21072372,
                    "relayNo": 1,
                    "relayName": "继电器1",
                    "enabled": true,
                    "deviceName": "室内空气质量监测仪",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 1
                },
                {
                    "deviceAddr": 21072372,
                    "relayNo": 2,
                    "relayName": "继电器2",
                    "enabled": true,
                    "deviceName": "室内空气质量监测仪",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 2
                },
                {
                    "deviceAddr": 21072372,
                    "relayNo": 3,
                    "relayName": "继电器3",
                    "enabled": true,
                    "deviceName": "室内空气质量监测仪",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 3
                },
                {
                    "deviceAddr": 21072372,
                    "relayNo": 4,
                    "relayName": "继电器4",
                    "enabled": true,
                    "deviceName": "室内空气质量监测仪",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 4
                },
                {
                    "deviceAddr": 21072372,
                    "relayNo": 5,
                    "relayName": "继电器5",
                    "enabled": true,
                    "deviceName": "室内空气质量监测仪",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 5
                },
                {
                    "deviceAddr": 21072372,
                    "relayNo": 6,
                    "relayName": "继电器6",
                    "enabled": true,
                    "deviceName": "室内空气质量监测仪",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 6
                },
                {
                    "deviceAddr": 21072372,
                    "relayNo": 7,
                    "relayName": "继电器7",
                    "enabled": true,
                    "deviceName": "室内空气质量监测仪",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 7
                },
                {
                    "deviceAddr": 21072372,
                    "relayNo": 8,
                    "relayName": "继电器8",
                    "enabled": true,
                    "deviceName": "室内空气质量监测仪",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 8
                }
            ]
        },
        hostList: {
            "code": 1000,
            "message": "获取成功",
            "data": [
                {
                    "deviceAddr": 40274120,
                    "relayNo": 1,
                    "relayName": "继电器1",
                    "enabled": true,
                    "deviceName": "智能监控主机",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 1
                },
                {
                    "deviceAddr": 40274120,
                    "relayNo": 2,
                    "relayName": "继电器2",
                    "enabled": true,
                    "deviceName": "智能监控主机",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 2
                },
                {
                    "deviceAddr": 40274120,
                    "relayNo": 3,
                    "relayName": "继电器3",
                    "enabled": true,
                    "deviceName": "智能监控主机",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 3
                },
                {
                    "deviceAddr": 40274120,
                    "relayNo": 4,
                    "relayName": "继电器4",
                    "enabled": true,
                    "deviceName": "智能监控主机",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 4
                },
                {
                    "deviceAddr": 40274120,
                    "relayNo": 5,
                    "relayName": "继电器5",
                    "enabled": true,
                    "deviceName": "智能监控主机",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 5
                },
                {
                    "deviceAddr": 40274120,
                    "relayNo": 6,
                    "relayName": "继电器6",
                    "enabled": true,
                    "deviceName": "智能监控主机",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 6
                },
                {
                    "deviceAddr": 40274120,
                    "relayNo": 7,
                    "relayName": "继电器7",
                    "enabled": true,
                    "deviceName": "智能监控主机",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 7
                },
                {
                    "deviceAddr": 40274120,
                    "relayNo": 8,
                    "relayName": "继电器8",
                    "enabled": true,
                    "deviceName": "智能监控主机",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 8
                }
            ]
        },
        enviromentList: {
            "code": 1000,
            "message": "获取成功",
            "data": [
                {
                    "deviceAddr": 40287568,
                    "relayNo": 1,
                    "relayName": "继电器1",
                    "enabled": true,
                    "deviceName": "室外气象环境监测站",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 1
                },
                {
                    "deviceAddr": 40287568,
                    "relayNo": 2,
                    "relayName": "继电器2",
                    "enabled": true,
                    "deviceName": "室外气象环境监测站",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 2
                },
                {
                    "deviceAddr": 40287568,
                    "relayNo": 3,
                    "relayName": "继电器3",
                    "enabled": true,
                    "deviceName": "室外气象环境监测站",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 3
                },
                {
                    "deviceAddr": 40287568,
                    "relayNo": 4,
                    "relayName": "继电器4",
                    "enabled": true,
                    "deviceName": "室外气象环境监测站",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 4
                },
                {
                    "deviceAddr": 40287568,
                    "relayNo": 5,
                    "relayName": "继电器5",
                    "enabled": true,
                    "deviceName": "室外气象环境监测站",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 5
                },
                {
                    "deviceAddr": 40287568,
                    "relayNo": 6,
                    "relayName": "继电器6",
                    "enabled": true,
                    "deviceName": "室外气象环境监测站",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 6
                },
                {
                    "deviceAddr": 40287568,
                    "relayNo": 7,
                    "relayName": "继电器7",
                    "enabled": true,
                    "deviceName": "室外气象环境监测站",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 7
                },
                {
                    "deviceAddr": 40287568,
                    "relayNo": 8,
                    "relayName": "继电器8",
                    "enabled": true,
                    "deviceName": "室外气象环境监测站",
                    "relayStatus": 0,
                    "operationMode": 1,
                    "relayType": 0,
                    "displayNo": 8
                }
            ]
        }

    },
    reducers: {
        changeIndexAction(state, {payload}) {
            state.index = payload
        }
    }
})

export const {
    changeIndexAction
} = relayControlSlice.actions
export default relayControlSlice.reducer