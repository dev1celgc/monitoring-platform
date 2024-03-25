import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        isShow: false,
        //控制因子信息搜索框的显示和隐藏
        factorIndex: -1,
        //控制不同传感器显示的索引值
        currentIndex: 1,
        //因子信息弹出框的x坐标
        factorX: 0,
        //因子信息弹出框的y坐标
        factorY: 0,
        //百度地图的放大和缩小
        mapExpand: false,
        //因子信息的放大和缩小
        factorExpand: false,
        //折现图和普通数据图的切换
        isLineChart: false,
        //控制操作表单的显示和隐藏
        menuIsShow: false,
        //侧边栏数组
        siderList: {
            "code": 1000,
            "message": "查询成功",
            "data": [
                {
                    "moduleCode": "home",
                    "moduleParent": "0",
                    "moduleName": "首页",
                    "moduleEnName": "Home",
                    "moduleUrl": "home",
                    "moduleIcon": "layui-icon-home",
                    "moduleSort": 1,
                    "display": 1,
                    "siteHost": "all",
                    "siteTheme": "all",
                    "sysModuleChildren": []
                },
                {
                    "moduleCode": "monitor",
                    "moduleParent": "0",
                    "moduleName": "在线监控",
                    "moduleEnName": "Online Monitor",
                    "moduleUrl": "#",
                    "moduleIcon": "layui-icon-website",
                    "moduleSort": 2,
                    "display": 1,
                    "siteHost": "all",
                    "siteTheme": "all",
                    "sysModuleChildren": [
                        {
                            "moduleCode": "realTime",
                            "moduleParent": "monitor",
                            "moduleName": "实时数据",
                            "moduleEnName": "Real-time Data",
                            "moduleUrl": "realTime",
                            "moduleIcon": null,
                            "moduleSort": 3,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        },
                        {
                            "moduleCode": "videomonitor",
                            "moduleParent": "monitor",
                            "moduleName": "视频监控",
                            "moduleEnName": "Video Surveillance",
                            "moduleUrl": "videomonitor",
                            "moduleIcon": null,
                            "moduleSort": 4,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        },
                        {
                            "moduleCode": "relayopt",
                            "moduleParent": "monitor",
                            "moduleName": "继电器控制",
                            "moduleEnName": "Relay Control",
                            "moduleUrl": "relayopt",
                            "moduleIcon": null,
                            "moduleSort": 5,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        }
                    ]
                },
                {
                    "moduleCode": "dataCenter",
                    "moduleParent": "0",
                    "moduleName": "数据中心",
                    "moduleEnName": "Data Center",
                    "moduleUrl": "#",
                    "moduleIcon": "layui-icon-layouts",
                    "moduleSort": 6,
                    "display": 1,
                    "siteHost": "all",
                    "siteTheme": "all",
                    "sysModuleChildren": [
                        {
                            "moduleCode": "history",
                            "moduleParent": "dataCenter",
                            "moduleName": "历史数据",
                            "moduleEnName": "History Data",
                            "moduleUrl": "history",
                            "moduleIcon": null,
                            "moduleSort": 7,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        },
                        {
                            "moduleCode": "alarmrecord",
                            "moduleParent": "dataCenter",
                            "moduleName": "报警数据",
                            "moduleEnName": "Alarm Data",
                            "moduleUrl": "alarmrecord",
                            "moduleIcon": null,
                            "moduleSort": 9,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        },
                        {
                            "moduleCode": "relayoptlog",
                            "moduleParent": "dataCenter",
                            "moduleName": "继电器操作记录",
                            "moduleEnName": "Relay Operation Record",
                            "moduleUrl": "relayoptlog",
                            "moduleIcon": null,
                            "moduleSort": 10,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        },
                        {
                            "moduleCode": "noticeHistory",
                            "moduleParent": "dataCenter",
                            "moduleName": "通知记录",
                            "moduleEnName": "Notice Record",
                            "moduleUrl": "noticeHistory",
                            "moduleIcon": "",
                            "moduleSort": 11,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        }
                    ]
                },
                {
                    "moduleCode": "ledManagement",
                    "moduleParent": "0",
                    "moduleName": "LED大屏管理",
                    "moduleEnName": "LED Management",
                    "moduleUrl": "ledManagement",
                    "moduleIcon": "layui-icon-chart-screen layui-extend-LED",
                    "moduleSort": 15,
                    "display": 0,
                    "siteHost": "all",
                    "siteTheme": "default,guanghai",
                    "sysModuleChildren": []
                },
                {
                    "moduleCode": "ledProjectionScreen",
                    "moduleParent": "0",
                    "moduleName": "LED投屏显示",
                    "moduleEnName": "LED Projection Screen",
                    "moduleUrl": "ledProjectionScreen",
                    "moduleIcon": "layui-icon-chart-screen layui-extend-kaiqipingmu",
                    "moduleSort": 16,
                    "display": 1,
                    "siteHost": "all",
                    "siteTheme": "default,guanghai",
                    "sysModuleChildren": [
                        {
                            "moduleCode": "ledSetting",
                            "moduleParent": "ledProjectionScreen",
                            "moduleName": "LED屏设置",
                            "moduleEnName": "LED Setting",
                            "moduleUrl": "ledSetting",
                            "moduleIcon": null,
                            "moduleSort": 17,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        },
                        {
                            "moduleCode": "ledDisplay",
                            "moduleParent": "ledProjectionScreen",
                            "moduleName": "LED屏显示",
                            "moduleEnName": "LED Display",
                            "moduleUrl": "ledDisplay",
                            "moduleIcon": null,
                            "moduleSort": 18,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        }
                    ]
                },
                {
                    "moduleCode": "sysManage",
                    "moduleParent": "0",
                    "moduleName": "系统管理",
                    "moduleEnName": "System Management",
                    "moduleUrl": "#",
                    "moduleIcon": "layui-icon-set",
                    "moduleSort": 20,
                    "display": 1,
                    "siteHost": "all",
                    "siteTheme": "all",
                    "sysModuleChildren": [
                        {
                            "moduleCode": "usermanager",
                            "moduleParent": "sysManage",
                            "moduleName": "账号管理",
                            "moduleEnName": "\r\nAccount Management",
                            "moduleUrl": "usermanager",
                            "moduleIcon": null,
                            "moduleSort": 21,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        },
                        {
                            "moduleCode": "devTable",
                            "moduleParent": "sysManage",
                            "moduleName": "设备管理",
                            "moduleEnName": "Device Management",
                            "moduleUrl": "devTable",
                            "moduleIcon": null,
                            "moduleSort": 22,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        },
                        {
                            "moduleCode": "loginlog",
                            "moduleParent": "sysManage",
                            "moduleName": "系统日志",
                            "moduleEnName": "System Log",
                            "moduleUrl": "loginlog",
                            "moduleIcon": null,
                            "moduleSort": 23,
                            "display": 1,
                            "siteHost": "all",
                            "siteTheme": "all",
                            "sysModuleChildren": null
                        }
                    ]
                }
            ]
        },
        //设备状态
        deviceStatus: {
            "code": 1000,
            "message": "成功",
            "data": {
                "offline": 0,
                "total": 4,
                "alarming": 0,
                "online": 4
            }
        },
        totalSensorList: [
            '北京延庆南菜园项目',
            '室外噪声传感器',
            '室内空气质量监测仪',
            '智能监控主机',
            '室外气象环境监测站',
        ],
        equipInfoList: [
            {
                name: '北京延庆南菜园项目',
                infoList: [
                    {
                        itemName: '区域名称',
                        itemText: '北京延庆南菜园项目'
                    },
                    {
                        itemName: '邮件剩余',
                        itemText: '100'
                    },
                    {
                        itemName: '短信剩余',
                        itemText: '10'
                    },
                    {
                        itemName: '语音剩余',
                        itemText: '10'
                    },
                ]
            },
           {
            name: '室外噪声传感器',
            infoList:  [
                {
                   itemName: '设备名称',
                   itemText: '室外噪声传感器'
               },
               {
                   itemName: '设备地址',
                   itemText: '21068083'
               },
               {
                   itemName: '所属区域',
                   itemText: '北京延庆南菜园项目'
               },
               {
                   itemName: '报警数据',
                   itemText: '开'
               },
               {
                   itemName: '报警类型',
                   itemText: '离线报警、超限报警'
               },
               {
                   itemName: '标记位置',
                   itemText: '开启'
               },
               {
                   itemName: '离线判断间隔',
                   itemText: '10分钟'
               },
               {
                   itemName: '保存数据间隔',
                   itemText: '10分钟'
               },
               ]
           },
           {
            name: '室内空气质量监测仪',
            infoList:  [
                {
                   itemName: '设备名称',
                   itemText: '室内空气质量监测仪'
               },
               {
                   itemName: '设备地址',
                   itemText: '21072372'
               },
               {
                   itemName: '所属区域',
                   itemText: '北京延庆南菜园项目'
               },
               {
                   itemName: '报警数据',
                   itemText: '开'
               },
               {
                   itemName: '报警类型',
                   itemText: '离线报警、超限报警'
               },
               {
                   itemName: '标记位置',
                   itemText: '开启'
               },
               {
                   itemName: '离线判断间隔',
                   itemText: '10分钟'
               },
               {
                   itemName: '保存数据间隔',
                   itemText: '10分钟'
               },
               ]
           },
           {
            name: '智能监控主机',
            infoList:  [
                {
                   itemName: '设备名称',
                   itemText: '智能监控主机'
               },
               {
                   itemName: '设备地址',
                   itemText: '40274120'
               },
               {
                   itemName: '所属区域',
                   itemText: '北京延庆南菜园项目'
               },
               {
                   itemName: '报警数据',
                   itemText: '开'
               },
               {
                   itemName: '报警类型',
                   itemText: '离线报警、超限报警'
               },
               {
                   itemName: '标记位置',
                   itemText: '开启'
               },
               {
                   itemName: '离线判断间隔',
                   itemText: '10分钟'
               },
               {
                   itemName: '保存数据间隔',
                   itemText: '10分钟'
               },
               ]
           },
           {
            name: '室外气象环境监测站',
            infoList:  [
                {
                   itemName: '设备名称',
                   itemText: '室外气象环境监测站'
               },
               {
                   itemName: '设备地址',
                   itemText: '40287568'
               },
               {
                   itemName: '所属区域',
                   itemText: '北京延庆南菜园项目'
               },
               {
                   itemName: '报警数据',
                   itemText: '开'
               },
               {
                   itemName: '报警类型',
                   itemText: '离线报警、超限报警'
               },
               {
                   itemName: '标记位置',
                   itemText: '开启'
               },
               {
                   itemName: '离线判断间隔',
                   itemText: '10分钟'
               },
               {
                   itemName: '保存数据间隔',
                   itemText: '5分钟'
               },
               ]
           },

           
        ],
        //传感器参数以及当前数值
        sensorParamsList: [
            {
                name: '北京延庆南菜园项目',
                paramsList: []
            },  
            {
                name: '室外噪声传感器',
                paramsList: [
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                ]
            }, 
            {
                name: '室内空气质量监测仪',
                paramsList: [
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                ]
            }, 
            {
                name: '智能监控主机',
                paramsList: [
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                ]
            }, 
            {
                name: '室外气象环境监测站',
                paramsList: [
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                    {
                        param: '噪声(dB)',
                        value: '68.9'
                    },
                ]
            },
        ],
        //传感器实时参数值
        realTimeData: {
            "code": 1000,
            "message": "获取成功",
            "data": [
                {
                    "systemCode": "iot",
                    "deviceAddr": 21068083,
                    "deviceName": "室外噪声传感器",
                    "lat": 40.448054,
                    "lng": 115.988705,
                    "deviceStatus": "normal",
                    "relayStatus": "[{\"relayNo\":1,\"relayStatus\":0},{\"relayNo\":2,\"relayStatus\":0},{\"relayNo\":3,\"relayStatus\":0},{\"relayNo\":4,\"relayStatus\":0},{\"relayNo\":5,\"relayStatus\":0},{\"relayNo\":6,\"relayStatus\":0},{\"relayNo\":7,\"relayStatus\":0},{\"relayNo\":8,\"relayStatus\":0},{\"relayNo\":9,\"relayStatus\":0},{\"relayNo\":10,\"relayStatus\":0},{\"relayNo\":11,\"relayStatus\":0},{\"relayNo\":12,\"relayStatus\":0},{\"relayNo\":13,\"relayStatus\":0},{\"relayNo\":14,\"relayStatus\":0},{\"relayNo\":15,\"relayStatus\":0},{\"relayNo\":16,\"relayStatus\":0}]",
                    "dataItem": [
                        {
                            "nodeId": 1,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "62.4",
                                    "value": 62.400001525878906,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "dB"
                                }
                            ]
                        }
                    ],
                    "timeStamp": 1709201454229
                },
                {
                    "systemCode": "iot",
                    "deviceAddr": 21072372,
                    "deviceName": "室内空气质量监测仪",
                    "lat": 40.448054,
                    "lng": 115.988705,
                    "deviceStatus": "normal",
                    "relayStatus": "[{\"relayNo\":1,\"relayStatus\":0},{\"relayNo\":2,\"relayStatus\":0},{\"relayNo\":3,\"relayStatus\":0},{\"relayNo\":4,\"relayStatus\":0},{\"relayNo\":5,\"relayStatus\":0},{\"relayNo\":6,\"relayStatus\":0},{\"relayNo\":7,\"relayStatus\":0},{\"relayNo\":8,\"relayStatus\":0},{\"relayNo\":9,\"relayStatus\":0},{\"relayNo\":10,\"relayStatus\":0},{\"relayNo\":11,\"relayStatus\":0},{\"relayNo\":12,\"relayStatus\":0},{\"relayNo\":13,\"relayStatus\":0},{\"relayNo\":14,\"relayStatus\":0},{\"relayNo\":15,\"relayStatus\":0},{\"relayNo\":16,\"relayStatus\":0}]",
                    "dataItem": [
                        {
                            "nodeId": 1,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "1.0",
                                    "value": 1.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "μg/m³"
                                },
                                {
                                    "registerId": 2,
                                    "data": "1.0",
                                    "value": 1.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "μg/m³"
                                }
                            ]
                        },
                        {
                            "nodeId": 2,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "24.1",
                                    "value": 24.100000381469727,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "18.2",
                                    "value": 18.200000762939453,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%RH"
                                }
                            ]
                        },
                        {
                            "nodeId": 19,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "1.0",
                                    "value": 1.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "μg/m³"
                                }
                            ]
                        },
                        {
                            "nodeId": 5,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "73.0",
                                    "value": 73.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "ppb"
                                }
                            ]
                        },
                        {
                            "nodeId": 7,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "0.0",
                                    "value": 0.009999999776482582,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "ppm"
                                }
                            ]
                        },
                        {
                            "nodeId": 8,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "0.0",
                                    "value": 0.019999999552965164,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "ppm"
                                }
                            ]
                        },
                        {
                            "nodeId": 12,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "0.0",
                                    "value": 0.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "ppm"
                                }
                            ]
                        },
                        {
                            "nodeId": 13,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "0.5",
                                    "value": 0.5,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "ppm"
                                }
                            ]
                        },
                        {
                            "nodeId": 14,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "0.0",
                                    "value": 0.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "ppm"
                                }
                            ]
                        }
                    ],
                    "timeStamp": 1709201453932
                },
                {
                    "systemCode": "iot",
                    "deviceAddr": 40274120,
                    "deviceName": "智能监控主机",
                    "lat": 40.448054,
                    "lng": 115.988705,
                    "deviceStatus": "normal",
                    "relayStatus": "[{\"relayNo\":1,\"relayStatus\":0},{\"relayNo\":2,\"relayStatus\":0},{\"relayNo\":3,\"relayStatus\":0},{\"relayNo\":4,\"relayStatus\":0},{\"relayNo\":5,\"relayStatus\":0},{\"relayNo\":6,\"relayStatus\":0},{\"relayNo\":7,\"relayStatus\":0},{\"relayNo\":8,\"relayStatus\":0},{\"relayNo\":9,\"relayStatus\":0},{\"relayNo\":10,\"relayStatus\":0},{\"relayNo\":11,\"relayStatus\":0},{\"relayNo\":12,\"relayStatus\":0},{\"relayNo\":13,\"relayStatus\":0},{\"relayNo\":14,\"relayStatus\":0},{\"relayNo\":15,\"relayStatus\":0},{\"relayNo\":16,\"relayStatus\":0}]",
                    "dataItem": [
                        {
                            "nodeId": 1,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "35.8",
                                    "value": 35.79999923706055,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "dB"
                                }
                            ]
                        },
                        {
                            "nodeId": 2,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "37.2",
                                    "value": 37.20000076293945,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "dB"
                                }
                            ]
                        },
                        {
                            "nodeId": 3,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "30.1",
                                    "value": 30.100000381469727,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "dB"
                                }
                            ]
                        },
                        {
                            "nodeId": 4,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "40.2",
                                    "value": 40.20000076293945,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "dB"
                                }
                            ]
                        },
                        {
                            "nodeId": 5,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "36.5",
                                    "value": 36.5,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "dB"
                                }
                            ]
                        },
                        {
                            "nodeId": 6,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "37.3",
                                    "value": 37.29999923706055,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "dB"
                                }
                            ]
                        },
                        {
                            "nodeId": 7,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "0.0",
                                    "value": 0.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "m/s"
                                }
                            ]
                        },
                        {
                            "nodeId": 8,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "0.0",
                                    "value": 0.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "m/s"
                                }
                            ]
                        },
                        {
                            "nodeId": 9,
                            "registerItem": [
                                {
                                    "registerId": 2,
                                    "data": "0.0",
                                    "value": 0.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "m/s"
                                }
                            ]
                        },
                        {
                            "nodeId": 10,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "20.6",
                                    "value": 20.600000381469727,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "23.0",
                                    "value": 23.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 11,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "20.3",
                                    "value": 20.30000114440918,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "23.0",
                                    "value": 23.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 12,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "20.6",
                                    "value": 20.600000381469727,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "23.3",
                                    "value": 23.30000114440918,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 13,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "20.4",
                                    "value": 20.399999618530273,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "23.4",
                                    "value": 23.399999618530273,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 14,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "20.4",
                                    "value": 20.399999618530273,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "23.0",
                                    "value": 23.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 15,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "20.5",
                                    "value": 20.5,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "23.2",
                                    "value": 23.200000762939453,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 16,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "22.9",
                                    "value": 22.899999618530273,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "20.1",
                                    "value": 20.100000381469727,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 17,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "18.2",
                                    "value": 18.200000762939453,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "25.8",
                                    "value": 25.80000114440918,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 18,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "18.9",
                                    "value": 18.899999618530273,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "25.0",
                                    "value": 25.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 19,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "20.0",
                                    "value": 20.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "23.5",
                                    "value": 23.5,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        },
                        {
                            "nodeId": 20,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "240.0",
                                    "value": 240.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 21,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "219.0",
                                    "value": 219.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 22,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "449.0",
                                    "value": 449.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 23,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "682.0",
                                    "value": 682.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 24,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "222.0",
                                    "value": 222.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 25,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "194.0",
                                    "value": 194.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 26,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "1742.0",
                                    "value": 1742.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 27,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "114.0",
                                    "value": 114.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 28,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "179.0",
                                    "value": 179.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 29,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "1293.0",
                                    "value": 1293.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 30,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "158.0",
                                    "value": 158.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 31,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "0.0",
                                    "value": 0.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        },
                        {
                            "nodeId": 32,
                            "registerItem": [
                                {
                                    "registerId": 5,
                                    "data": "0.0",
                                    "value": 0.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "Lux"
                                }
                            ]
                        }
                    ],
                    "timeStamp": 1709201448662
                },
                {
                    "systemCode": "iot",
                    "deviceAddr": 40287568,
                    "deviceName": "室外气象环境监测站",
                    "lat": 40.448054,
                    "lng": 115.988705,
                    "deviceStatus": "normal",
                    "relayStatus": "[{\"relayNo\":1,\"relayStatus\":0},{\"relayNo\":2,\"relayStatus\":0},{\"relayNo\":3,\"relayStatus\":1},{\"relayNo\":4,\"relayStatus\":0},{\"relayNo\":5,\"relayStatus\":0},{\"relayNo\":6,\"relayStatus\":0},{\"relayNo\":7,\"relayStatus\":0},{\"relayNo\":8,\"relayStatus\":0},{\"relayNo\":9,\"relayStatus\":0},{\"relayNo\":10,\"relayStatus\":0},{\"relayNo\":11,\"relayStatus\":0},{\"relayNo\":12,\"relayStatus\":0},{\"relayNo\":13,\"relayStatus\":0},{\"relayNo\":14,\"relayStatus\":0},{\"relayNo\":15,\"relayStatus\":0},{\"relayNo\":16,\"relayStatus\":0}]",
                    "dataItem": [
                        {
                            "nodeId": 1,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "1",
                                    "value": 1.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "级"
                                },
                                {
                                    "registerId": 2,
                                    "data": "0.9",
                                    "value": 0.9000000357627869,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "m/s"
                                }
                            ]
                        },
                        {
                            "nodeId": 2,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "西南风",
                                    "value": 5.0,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "室外气象环境监测站_2_风向 设备地址：40287568, 报警内容西南风,报警时间：2024-02-29 18:08:38",
                                    "unit": "方向"
                                }
                            ]
                        },
                        {
                            "nodeId": 11,
                            "registerItem": [
                                {
                                    "registerId": 1,
                                    "data": "-5.1",
                                    "value": -5.099999904632568,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "℃"
                                },
                                {
                                    "registerId": 2,
                                    "data": "24.1",
                                    "value": 24.100000381469727,
                                    "alarmLevel": 0,
                                    "alarmColor": "ff0000",
                                    "alarmInfo": "",
                                    "unit": "%"
                                }
                            ]
                        }
                    ],
                    "timeStamp": 1709201318905
                }
            ]
        }
    },
    reducers: {
        changeCurrentIndexAction(state, { payload }) {
            state.currentIndex = payload
        },
        changeFactorIndexAction(state, { payload }) {
            state.factorIndex = payload
        },
        changeIsShowTrueAction(state, { payload }) {
            state.isShow = true
        },
        changeIsShowFalseAction(state, { payload }) {
            state.isShow = false
        },
        changeFactorXAction(state, { payload }) {
            state.factorX = payload
        },
        changeFactorYAction(state, { payload }) {
            state.factorY = payload
        },
        changeMapExpandAction(state, { payload }) {
            state.mapExpand = payload
        },
        changeFactorExpandAction(state, { payload }) {
            state.factorExpand = payload
        },
        changeIsLineChartAction(state, { payload }) {
            state.isLineChart = payload
        },
        changeMenuIsShowAction(state, { payload }) {
            state.menuIsShow = payload
        }
    }
})
export const { 
    changeCurrentIndexAction,
    changeFactorIndexAction,
    changeIsShowTrueAction,
    changeIsShowFalseAction,
    changeFactorXAction,
    changeFactorYAction,
    changeMapExpandAction,
    changeFactorExpandAction,
    changeIsLineChartAction,
    changeMenuIsShowAction
   } = homeSlice.actions 
export default homeSlice.reducer