import { configureStore } from '@reduxjs/toolkit'
import entireReducer from './modules/entires/index'
import homeReducer from './modules/home'
import timeDataReducer from './modules/realtime_data'
import videoMonitorReducer from './modules/video_monitor'
import relayControlReducer from './modules/relay_control'
import historicDataReducer from './modules/historic_data'
import alarmDataReducer from './modules/alarm_data'
import operationRecordReducer from './modules/operation_record'
import notificationRecordReducer from './modules/notification_record'
import lineChartDataReducer from './modules/line_chart_data'
const store = configureStore({
    reducer: {
        entire: entireReducer,
        home: homeReducer,
        timeData: timeDataReducer,
        videoMonitor: videoMonitorReducer,
        relaycontrol: relayControlReducer,
        historicData: historicDataReducer,
        alarmData: alarmDataReducer,
        operationRecord: operationRecordReducer,
        notificationRecord: notificationRecordReducer,
        lineChartData: lineChartDataReducer
    }
})

export default store