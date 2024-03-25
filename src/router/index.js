import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home"))
const TimeData = React.lazy(() => import("@/views/online_monitor/real_time_data"))
const RelayControl = React.lazy(() => import("@/views/online_monitor/relay_control"))
const VideoMonitor = React.lazy(() => import("@/views/online_monitor/video_monitoring"))
const AlarmData = React.lazy(() => import("@/views/data_center/alarm_data"))
const HistoricData = React.lazy(() => import("@/views/data_center/historic_data"))
const NotificationRecord = React.lazy(() => import("@/views/data_center/notification_record"))
const OperationRecord = React.lazy(() => import("@/views/data_center/relay_operation_record"))
const Login = React.lazy(() => import("@/views/login/index"))
const HomeCore = React.lazy(() => import("@/views/home-content/homecore"))
const routes = [
    {
        path: '/',
        element: <Navigate to="/platform/home" />
    },
    {
        path: '/platform',
        element: <HomeCore/>,
        children: [
            {
                path: '/platform/home',
                element: <Home/>
            },
            {
                path: '/platform/timedata',
                element: <TimeData/>
            },
            {
                path: '/platform/timedata',
                element: <TimeData/>
            },
            {
                path: '/platform/relaycontrol',
                element: <RelayControl/>
            },
            {
                path: '/platform/videomonitor',
                element: <VideoMonitor/>
            },
            {
                path: '/platform/alarmdata',
                element: <AlarmData/>
            },
            {
                path: '/platform/historicdata',
                element: <HistoricData/>
            },
            {
                path: '/platform/notificationrecord',
                element: <NotificationRecord/>
            },
            {
                path: '/platform/operationrecord',
                element: <OperationRecord/>
            },
            
         
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }   
]

export default routes