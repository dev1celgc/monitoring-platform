import { createSlice } from "@reduxjs/toolkit"

const lineChartDataSlice = createSlice({
    name: 'lineChartData',
    initialState: {
        noiseData: [
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21068083,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "噪声",
                                "value": 69.6,
                                "text": "69.6",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709281456753,
                        "handled": false,
                        "recordId": "65e190b09a5263215ac2c914",
                        "recordTimeStr": "2024-03-01 16:24:16"
                    },
                    {
                        "deviceAddr": 21068083,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "噪声",
                                "value": 69.4,
                                "text": "69.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282056753,
                        "handled": false,
                        "recordId": "65e193089a5263215ac37731",
                        "recordTimeStr": "2024-03-01 16:34:16"
                    },
                    {
                        "deviceAddr": 21068083,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "噪声",
                                "value": 69.4,
                                "text": "69.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282656753,
                        "handled": false,
                        "recordId": "65e195609a5263215ac40826",
                        "recordTimeStr": "2024-03-01 16:44:16"
                    },
                    {
                        "deviceAddr": 21068083,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "噪声",
                                "value": 70.2,
                                "text": "70.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283256753,
                        "handled": false,
                        "recordId": "65e197b89a5263215ac497c1",
                        "recordTimeStr": "2024-03-01 16:54:16"
                    },
                    {
                        "deviceAddr": 21068083,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "噪声",
                                "value": 69.5,
                                "text": "69.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283856753,
                        "handled": false,
                        "recordId": "65e19a109a5263215ac5469e",
                        "recordTimeStr": "2024-03-01 17:04:16"
                    },
                    {
                        "deviceAddr": 21068083,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "噪声",
                                "value": 69.3,
                                "text": "69.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284456754,
                        "handled": false,
                        "recordId": "65e19c689a5263215ac5d765",
                        "recordTimeStr": "2024-03-01 17:14:16"
                    }
                ]
            }
        ],
        airData: [
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "PM10",
                                "value": 1.0,
                                "text": "1.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd0",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "PM10",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd196",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "PM10",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a2",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "PM10",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdca",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "PM10",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d8413",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "PM10",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28ea",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "PM2.5",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd0",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "PM2.5",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd196",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "PM2.5",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a2",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "PM2.5",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdca",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "PM2.5",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d8413",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "PM2.5",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28ea",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "温度",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd1",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "温度",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd197",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "温度",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a3",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "温度",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdcb",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "温度",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d8414",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "温度",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28eb",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "湿度",
                                "value": 17.4,
                                "text": "17.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd1",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "湿度",
                                "value": 17.4,
                                "text": "17.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd197",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "湿度",
                                "value": 17.4,
                                "text": "17.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a3",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "湿度",
                                "value": 17.4,
                                "text": "17.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdcb",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "湿度",
                                "value": 17.5,
                                "text": "17.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d8414",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "湿度",
                                "value": 17.4,
                                "text": "17.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28eb",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "TVOC",
                                "value": 39.0,
                                "text": "39.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd3",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "TVOC",
                                "value": 49.0,
                                "text": "49.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd199",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "TVOC",
                                "value": 42.0,
                                "text": "42.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a5",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "TVOC",
                                "value": 49.0,
                                "text": "49.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdcd",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "TVOC",
                                "value": 51.0,
                                "text": "51.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d8416",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "TVOC",
                                "value": 48.0,
                                "text": "48.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28ed",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "甲醛",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd4",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "甲醛",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd19a",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "甲醛",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a6",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "甲醛",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdce",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "甲醛",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d8417",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "甲醛",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28ee",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "臭氧",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd5",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "臭氧",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd19b",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "臭氧",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a7",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "臭氧",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdcf",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "臭氧",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d8418",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "臭氧",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28ef",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "一氧化碳",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd6",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "一氧化碳",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd19c",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "一氧化碳",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a8",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "一氧化碳",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdd0",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "一氧化碳",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d8419",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "一氧化碳",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28f0",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化氮",
                                "value": 0.5,
                                "text": "0.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd7",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化氮",
                                "value": 0.5,
                                "text": "0.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd19d",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化氮",
                                "value": 0.5,
                                "text": "0.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a9",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化氮",
                                "value": 0.5,
                                "text": "0.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdd1",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化氮",
                                "value": 0.5,
                                "text": "0.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d841a",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化氮",
                                "value": 0.5,
                                "text": "0.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28f1",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化硫",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd8",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化硫",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd19e",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化硫",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75aa",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化硫",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdd2",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化硫",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d841b",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "二氧化硫",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28f2",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "TSP",
                                "value": 1.0,
                                "text": "1.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709276960522,
                        "handled": false,
                        "recordId": "65e17f20d7782931526b4bd2",
                        "recordTimeStr": "2024-03-01 15:09:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "TSP",
                                "value": 1.0,
                                "text": "1.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709277560522,
                        "handled": false,
                        "recordId": "65e18178d7782931526bd198",
                        "recordTimeStr": "2024-03-01 15:19:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "TSP",
                                "value": 1.0,
                                "text": "1.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278160523,
                        "handled": false,
                        "recordId": "65e183d0d7782931526c75a4",
                        "recordTimeStr": "2024-03-01 15:29:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "TSP",
                                "value": 1.0,
                                "text": "1.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709278760523,
                        "handled": false,
                        "recordId": "65e18628d7782931526cfdcc",
                        "recordTimeStr": "2024-03-01 15:39:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "TSP",
                                "value": 1.0,
                                "text": "1.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279360523,
                        "handled": false,
                        "recordId": "65e18880d7782931526d8415",
                        "recordTimeStr": "2024-03-01 15:49:20"
                    },
                    {
                        "deviceAddr": 21072372,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "TSP",
                                "value": 1.0,
                                "text": "1.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709279960523,
                        "handled": false,
                        "recordId": "65e18ad8d7782931526e28ec",
                        "recordTimeStr": "2024-03-01 15:59:20"
                    }
                ]
            }
        ],
        hostData: [
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-噪声-ZS-1",
                                "value": 39.7,
                                "text": "39.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702348",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-噪声-ZS-1",
                                "value": 37.1,
                                "text": "37.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a96d",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-噪声-ZS-1",
                                "value": 36.7,
                                "text": "36.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f34",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-噪声-ZS-1",
                                "value": 36.4,
                                "text": "36.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d644",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-噪声-ZS-1",
                                "value": 39.6,
                                "text": "39.6",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cad",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-噪声-ZS-1",
                                "value": 37.1,
                                "text": "37.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2e9",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-噪声-ZS-2",
                                "value": 38.9,
                                "text": "38.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702349",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-噪声-ZS-2",
                                "value": 37.7,
                                "text": "37.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a96e",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-噪声-ZS-2",
                                "value": 37.7,
                                "text": "37.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f35",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-噪声-ZS-2",
                                "value": 37.7,
                                "text": "37.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d645",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-噪声-ZS-2",
                                "value": 39.3,
                                "text": "39.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cae",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-噪声-ZS-2",
                                "value": 37.8,
                                "text": "37.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2ea",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 3,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-噪声-ZS-4",
                                "value": 31.6,
                                "text": "31.6",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270234a",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 3,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-噪声-ZS-4",
                                "value": 30.4,
                                "text": "30.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a96f",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 3,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-噪声-ZS-4",
                                "value": 30.2,
                                "text": "30.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f36",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 3,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-噪声-ZS-4",
                                "value": 30.6,
                                "text": "30.6",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d646",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 3,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-噪声-ZS-4",
                                "value": 32.3,
                                "text": "32.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725caf",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 3,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-噪声-ZS-4",
                                "value": 30.7,
                                "text": "30.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2eb",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 4,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室-噪声-ZS-3",
                                "value": 40.6,
                                "text": "40.6",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270234b",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 4,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室-噪声-ZS-3",
                                "value": 40.4,
                                "text": "40.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a970",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 4,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室-噪声-ZS-3",
                                "value": 40.6,
                                "text": "40.6",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f37",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 4,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室-噪声-ZS-3",
                                "value": 40.5,
                                "text": "40.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d647",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 4,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室-噪声-ZS-3",
                                "value": 40.5,
                                "text": "40.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb0",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 4,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室-噪声-ZS-3",
                                "value": 40.5,
                                "text": "40.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2ec",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-噪声-ZS-5",
                                "value": 36.5,
                                "text": "36.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270234c",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-噪声-ZS-5",
                                "value": 36.9,
                                "text": "36.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a971",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-噪声-ZS-5",
                                "value": 36.5,
                                "text": "36.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f38",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-噪声-ZS-5",
                                "value": 36.7,
                                "text": "36.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d648",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-噪声-ZS-5",
                                "value": 37.3,
                                "text": "37.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb1",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 5,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-噪声-ZS-5",
                                "value": 36.5,
                                "text": "36.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2ed",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 6,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室3-噪声-ZS-6",
                                "value": 37.5,
                                "text": "37.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270234d",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 6,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室3-噪声-ZS-6",
                                "value": 37.6,
                                "text": "37.6",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a972",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 6,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室3-噪声-ZS-6",
                                "value": 37.7,
                                "text": "37.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f39",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 6,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室3-噪声-ZS-6",
                                "value": 38.3,
                                "text": "38.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d649",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 6,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室3-噪声-ZS-6",
                                "value": 37.7,
                                "text": "37.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb2",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 6,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室3-噪声-ZS-6",
                                "value": 37.6,
                                "text": "37.6",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2ee",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-风速-FS-1",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270234e",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-风速-FS-1",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a973",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-风速-FS-1",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f3a",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-风速-FS-1",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d64a",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-风速-FS-1",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb3",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 7,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-风速-FS-1",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2ef",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-风速-FS-2",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270234f",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-风速-FS-2",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a974",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-风速-FS-2",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f3b",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-风速-FS-2",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d64b",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-风速-FS-2",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb4",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 8,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "起居室-风速-FS-2",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f0",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 9,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-风速-FS-3",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702350",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 9,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-风速-FS-3",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a975",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 9,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-风速-FS-3",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f3c",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 9,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-风速-FS-3",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d64c",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 9,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-风速-FS-3",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb5",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 9,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-风速-FS-3",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f1",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-1",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702351",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-1",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a976",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-1",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f3d",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-1",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d64d",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-1",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb6",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-1",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f2",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-1",
                                "value": 22.0,
                                "text": "22.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702351",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-1",
                                "value": 22.0,
                                "text": "22.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a976",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-1",
                                "value": 22.0,
                                "text": "22.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f3d",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-1",
                                "value": 22.0,
                                "text": "22.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d64d",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-1",
                                "value": 22.0,
                                "text": "22.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb6",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 10,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-1",
                                "value": 22.0,
                                "text": "22.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f2",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-2",
                                "value": 20.5,
                                "text": "20.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702352",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-2",
                                "value": 20.5,
                                "text": "20.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a977",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-2",
                                "value": 20.5,
                                "text": "20.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f3e",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-2",
                                "value": 20.5,
                                "text": "20.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d64e",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-2",
                                "value": 20.5,
                                "text": "20.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb7",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-2",
                                "value": 20.5,
                                "text": "20.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f3",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-2",
                                "value": 22.2,
                                "text": "22.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702352",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-2",
                                "value": 22.2,
                                "text": "22.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a977",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-2",
                                "value": 22.2,
                                "text": "22.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f3e",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-2",
                                "value": 22.3,
                                "text": "22.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d64e",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-2",
                                "value": 22.2,
                                "text": "22.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb7",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-2",
                                "value": 22.3,
                                "text": "22.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f3",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-4",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702353",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-4",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a978",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-4",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f3f",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-4",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d64f",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-4",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb8",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "厨房-温度-GZ-4",
                                "value": 20.8,
                                "text": "20.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f4",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-4",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702353",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-4",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a978",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-4",
                                "value": 22.5,
                                "text": "22.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f3f",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-4",
                                "value": 22.5,
                                "text": "22.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d64f",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-4",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb8",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 12,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "厨房-湿度-GZ-4",
                                "value": 22.5,
                                "text": "22.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f4",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "西厨-温度-GZ-3",
                                "value": 20.4,
                                "text": "20.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702354",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "西厨-温度-GZ-3",
                                "value": 20.4,
                                "text": "20.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a979",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "西厨-温度-GZ-3",
                                "value": 20.4,
                                "text": "20.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f40",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "西厨-温度-GZ-3",
                                "value": 20.4,
                                "text": "20.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d650",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "西厨-温度-GZ-3",
                                "value": 20.4,
                                "text": "20.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb9",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "西厨-温度-GZ-3",
                                "value": 20.4,
                                "text": "20.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f5",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "西厨-湿度-GZ-3",
                                "value": 22.7,
                                "text": "22.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702354",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "西厨-湿度-GZ-3",
                                "value": 22.7,
                                "text": "22.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a979",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "西厨-湿度-GZ-3",
                                "value": 22.7,
                                "text": "22.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f40",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "西厨-湿度-GZ-3",
                                "value": 22.7,
                                "text": "22.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d650",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "西厨-湿度-GZ-3",
                                "value": 22.7,
                                "text": "22.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cb9",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 13,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "西厨-湿度-GZ-3",
                                "value": 22.7,
                                "text": "22.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f5",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-6",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702355",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-6",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97a",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-6",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f41",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-6",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d651",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-6",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cba",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-6",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f6",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-6",
                                "value": 22.3,
                                "text": "22.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702355",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-6",
                                "value": 22.3,
                                "text": "22.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97a",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-6",
                                "value": 22.3,
                                "text": "22.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f41",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-6",
                                "value": 22.3,
                                "text": "22.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d651",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-6",
                                "value": 22.3,
                                "text": "22.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cba",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 14,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-6",
                                "value": 22.3,
                                "text": "22.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f6",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-7",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702356",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-7",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97b",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-7",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f42",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-7",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d652",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-7",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbb",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "卧室2-温度-GZ-7",
                                "value": 20.7,
                                "text": "20.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f7",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-7",
                                "value": 22.5,
                                "text": "22.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702356",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-7",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97b",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-7",
                                "value": 22.5,
                                "text": "22.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f42",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-7",
                                "value": 22.5,
                                "text": "22.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d652",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-7",
                                "value": 22.5,
                                "text": "22.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbb",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 15,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "卧室2-湿度-GZ-7",
                                "value": 22.5,
                                "text": "22.5",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f7",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "餐厅-温度-GZ-5",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702357",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "餐厅-温度-GZ-5",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97c",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "餐厅-温度-GZ-5",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f43",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "餐厅-温度-GZ-5",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d653",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "餐厅-温度-GZ-5",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbc",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "餐厅-温度-GZ-5",
                                "value": 22.4,
                                "text": "22.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f8",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "餐厅-湿度-GZ-5",
                                "value": 20.0,
                                "text": "20.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702357",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "餐厅-湿度-GZ-5",
                                "value": 20.0,
                                "text": "20.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97c",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "餐厅-湿度-GZ-5",
                                "value": 20.1,
                                "text": "20.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f43",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "餐厅-湿度-GZ-5",
                                "value": 20.1,
                                "text": "20.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d653",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "餐厅-湿度-GZ-5",
                                "value": 20.1,
                                "text": "20.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbc",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 16,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "餐厅-湿度-GZ-5",
                                "value": 20.1,
                                "text": "20.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f8",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-8",
                                "value": 18.0,
                                "text": "18.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702358",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-8",
                                "value": 18.0,
                                "text": "18.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97d",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-8",
                                "value": 18.0,
                                "text": "18.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f44",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-8",
                                "value": 18.0,
                                "text": "18.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d654",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-8",
                                "value": 18.0,
                                "text": "18.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbd",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-8",
                                "value": 18.0,
                                "text": "18.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f9",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-8",
                                "value": 25.1,
                                "text": "25.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702358",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-8",
                                "value": 25.1,
                                "text": "25.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97d",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-8",
                                "value": 25.1,
                                "text": "25.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f44",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-8",
                                "value": 25.1,
                                "text": "25.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d654",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-8",
                                "value": 25.1,
                                "text": "25.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbd",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 17,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-8",
                                "value": 25.1,
                                "text": "25.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2f9",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-9",
                                "value": 18.9,
                                "text": "18.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702359",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-9",
                                "value": 18.9,
                                "text": "18.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97e",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-9",
                                "value": 18.9,
                                "text": "18.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f45",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-9",
                                "value": 18.9,
                                "text": "18.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d655",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-9",
                                "value": 18.9,
                                "text": "18.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbe",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "阳台-温度-GZ-9",
                                "value": 18.9,
                                "text": "18.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2fa",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-9",
                                "value": 24.0,
                                "text": "24.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702359",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-9",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97e",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-9",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f45",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-9",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d655",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-9",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbe",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 18,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "阳台-湿度-GZ-9",
                                "value": 24.1,
                                "text": "24.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2fa",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "主卧-温度-GZ-10",
                                "value": 20.0,
                                "text": "20.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270235a",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "主卧-温度-GZ-10",
                                "value": 20.0,
                                "text": "20.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97f",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "主卧-温度-GZ-10",
                                "value": 20.0,
                                "text": "20.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f46",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "主卧-温度-GZ-10",
                                "value": 20.0,
                                "text": "20.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d656",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "主卧-温度-GZ-10",
                                "value": 20.0,
                                "text": "20.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbf",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "主卧-温度-GZ-10",
                                "value": 20.0,
                                "text": "20.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2fb",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-湿度-GZ-10",
                                "value": 22.8,
                                "text": "22.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270235a",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-湿度-GZ-10",
                                "value": 22.8,
                                "text": "22.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a97f",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-湿度-GZ-10",
                                "value": 22.8,
                                "text": "22.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f46",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-湿度-GZ-10",
                                "value": 22.7,
                                "text": "22.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d656",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-湿度-GZ-10",
                                "value": 22.8,
                                "text": "22.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cbf",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 19,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "主卧-湿度-GZ-10",
                                "value": 22.8,
                                "text": "22.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2fb",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 20,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-1",
                                "value": 240.0,
                                "text": "240.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270235b",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 20,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-1",
                                "value": 240.0,
                                "text": "240.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a980",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 20,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-1",
                                "value": 240.0,
                                "text": "240.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f47",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 20,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-1",
                                "value": 240.0,
                                "text": "240.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d657",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 20,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-1",
                                "value": 240.0,
                                "text": "240.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc0",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 20,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-1",
                                "value": 240.0,
                                "text": "240.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2fc",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 21,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-2",
                                "value": 219.0,
                                "text": "219.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270235c",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 21,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-2",
                                "value": 215.0,
                                "text": "215.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a981",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 21,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-2",
                                "value": 219.0,
                                "text": "219.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f48",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 21,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-2",
                                "value": 215.0,
                                "text": "215.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d658",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 21,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-2",
                                "value": 215.0,
                                "text": "215.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc1",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 21,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-2",
                                "value": 215.0,
                                "text": "215.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2fd",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 22,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-4",
                                "value": 449.0,
                                "text": "449.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270235d",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 22,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-4",
                                "value": 449.0,
                                "text": "449.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a982",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 22,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-4",
                                "value": 449.0,
                                "text": "449.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f49",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 22,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-4",
                                "value": 449.0,
                                "text": "449.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d659",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 22,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-4",
                                "value": 449.0,
                                "text": "449.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc2",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 22,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "厨房-光照-GZ-4",
                                "value": 449.0,
                                "text": "449.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2fe",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 23,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "西厨-光照-GZ-3",
                                "value": 679.0,
                                "text": "679.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270235e",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 23,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "西厨-光照-GZ-3",
                                "value": 679.0,
                                "text": "679.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a983",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 23,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "西厨-光照-GZ-3",
                                "value": 679.0,
                                "text": "679.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f4a",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 23,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "西厨-光照-GZ-3",
                                "value": 682.0,
                                "text": "682.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d65a",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 23,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "西厨-光照-GZ-3",
                                "value": 682.0,
                                "text": "682.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc3",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 23,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "西厨-光照-GZ-3",
                                "value": 682.0,
                                "text": "682.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e2ff",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 24,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-6",
                                "value": 219.0,
                                "text": "219.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d77829315270235f",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 24,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-6",
                                "value": 219.0,
                                "text": "219.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a984",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 24,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-6",
                                "value": 219.0,
                                "text": "219.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f4b",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 24,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-6",
                                "value": 222.0,
                                "text": "222.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d65b",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 24,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-6",
                                "value": 222.0,
                                "text": "222.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc4",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 24,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-6",
                                "value": 222.0,
                                "text": "222.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e300",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 25,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-7",
                                "value": 194.0,
                                "text": "194.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702360",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 25,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-7",
                                "value": 194.0,
                                "text": "194.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a985",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 25,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-7",
                                "value": 194.0,
                                "text": "194.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f4c",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 25,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-7",
                                "value": 194.0,
                                "text": "194.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d65c",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 25,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-7",
                                "value": 194.0,
                                "text": "194.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc5",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 25,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室2-光照-GZ-7",
                                "value": 194.0,
                                "text": "194.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e301",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 26,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "餐厅-光照-GZ-5",
                                "value": 1703.0,
                                "text": "1703.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702361",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 26,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "餐厅-光照-GZ-5",
                                "value": 1710.0,
                                "text": "1710.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a986",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 26,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "餐厅-光照-GZ-5",
                                "value": 1703.0,
                                "text": "1703.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f4d",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 26,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "餐厅-光照-GZ-5",
                                "value": 1749.0,
                                "text": "1749.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d65d",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 26,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "餐厅-光照-GZ-5",
                                "value": 1746.0,
                                "text": "1746.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc6",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 26,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "餐厅-光照-GZ-5",
                                "value": 1746.0,
                                "text": "1746.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e302",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 27,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-8",
                                "value": 114.0,
                                "text": "114.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702362",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 27,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-8",
                                "value": 114.0,
                                "text": "114.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a987",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 27,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-8",
                                "value": 114.0,
                                "text": "114.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f4e",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 27,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-8",
                                "value": 114.0,
                                "text": "114.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d65e",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 27,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-8",
                                "value": 114.0,
                                "text": "114.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc7",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 27,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-8",
                                "value": 114.0,
                                "text": "114.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e303",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 28,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-9",
                                "value": 179.0,
                                "text": "179.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702363",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 28,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-9",
                                "value": 179.0,
                                "text": "179.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a988",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 28,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-9",
                                "value": 179.0,
                                "text": "179.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f4f",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 28,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-9",
                                "value": 179.0,
                                "text": "179.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d65f",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 28,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-9",
                                "value": 179.0,
                                "text": "179.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc8",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 28,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "阳台-光照-GZ-9",
                                "value": 179.0,
                                "text": "179.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e304",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 29,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "主卧-光照-GZ-10",
                                "value": 1293.0,
                                "text": "1293.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702364",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 29,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "主卧-光照-GZ-10",
                                "value": 1293.0,
                                "text": "1293.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a989",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 29,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "主卧-光照-GZ-10",
                                "value": 1293.0,
                                "text": "1293.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f50",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 29,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "主卧-光照-GZ-10",
                                "value": 1293.0,
                                "text": "1293.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d660",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 29,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "主卧-光照-GZ-10",
                                "value": 1293.0,
                                "text": "1293.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cc9",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 29,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "主卧-光照-GZ-10",
                                "value": 1293.0,
                                "text": "1293.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e305",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 30,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室3-光照-GZ-11",
                                "value": 158.0,
                                "text": "158.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702365",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 30,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室3-光照-GZ-11",
                                "value": 154.0,
                                "text": "154.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a98a",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 30,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室3-光照-GZ-11",
                                "value": 154.0,
                                "text": "154.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f51",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 30,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室3-光照-GZ-11",
                                "value": 158.0,
                                "text": "158.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d661",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 30,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室3-光照-GZ-11",
                                "value": 158.0,
                                "text": "158.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725cca",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 30,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "卧室3-光照-GZ-11",
                                "value": 158.0,
                                "text": "158.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e306",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 31,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702366",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 31,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a98b",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 31,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f52",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 31,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d662",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 31,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725ccb",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 31,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e307",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 32,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282073723,
                        "handled": false,
                        "recordId": "65e19319d778293152702367",
                        "recordTimeStr": "2024-03-01 16:34:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 32,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709282673723,
                        "handled": false,
                        "recordId": "65e19571d77829315270a98c",
                        "recordTimeStr": "2024-03-01 16:44:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 32,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283273723,
                        "handled": false,
                        "recordId": "65e197c9d778293152712f53",
                        "recordTimeStr": "2024-03-01 16:54:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 32,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709283873723,
                        "handled": false,
                        "recordId": "65e19a21d77829315271d663",
                        "recordTimeStr": "2024-03-01 17:04:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 32,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709284473723,
                        "handled": false,
                        "recordId": "65e19c79d778293152725ccc",
                        "recordTimeStr": "2024-03-01 17:14:33"
                    },
                    {
                        "deviceAddr": 40274120,
                        "nodeId": 32,
                        "data": [
                            {
                                "registerId": 5,
                                "registerName": "光照",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709285073723,
                        "handled": false,
                        "recordId": "65e19ed1d77829315272e308",
                        "recordTimeStr": "2024-03-01 17:24:33"
                    }
                ]
            }     
        ],
        environmentData: [
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 0.0,
                                "text": "0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712573022,
                        "handled": false,
                        "recordId": "65e824bd5eabcc2679ddb763",
                        "recordTimeStr": "2024-03-06 16:09:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 0.0,
                                "text": "0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712873022,
                        "handled": false,
                        "recordId": "65e825e95eabcc2679de5a18",
                        "recordTimeStr": "2024-03-06 16:14:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 0.0,
                                "text": "0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713173022,
                        "handled": false,
                        "recordId": "65e827155eabcc2679debca6",
                        "recordTimeStr": "2024-03-06 16:19:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 0.0,
                                "text": "0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713473022,
                        "handled": false,
                        "recordId": "65e828415eabcc2679df1ffa",
                        "recordTimeStr": "2024-03-06 16:24:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 0.0,
                                "text": "0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713773031,
                        "handled": false,
                        "recordId": "65e8296d5eabcc2679df8034",
                        "recordTimeStr": "2024-03-06 16:29:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 1.0,
                                "text": "1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714073032,
                        "handled": false,
                        "recordId": "65e82a995eabcc2679dfe50c",
                        "recordTimeStr": "2024-03-06 16:34:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 1.0,
                                "text": "1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714373032,
                        "handled": false,
                        "recordId": "65e82bc55eabcc2679e04378",
                        "recordTimeStr": "2024-03-06 16:39:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 0.0,
                                "text": "0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714673032,
                        "handled": false,
                        "recordId": "65e82cf15eabcc2679e0e424",
                        "recordTimeStr": "2024-03-06 16:44:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 0.0,
                                "text": "0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714973032,
                        "handled": false,
                        "recordId": "65e82e1d5eabcc2679e146aa",
                        "recordTimeStr": "2024-03-06 16:49:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 0.0,
                                "text": "0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715273032,
                        "handled": false,
                        "recordId": "65e82f495eabcc2679e1a9fe",
                        "recordTimeStr": "2024-03-06 16:54:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 1.0,
                                "text": "1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715573032,
                        "handled": false,
                        "recordId": "65e830755eabcc2679e20a13",
                        "recordTimeStr": "2024-03-06 16:59:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风力",
                                "value": 0.0,
                                "text": "0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715873036,
                        "handled": false,
                        "recordId": "65e831a15eabcc2679e26eee",
                        "recordTimeStr": "2024-03-06 17:04:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712573022,
                        "handled": false,
                        "recordId": "65e824bd5eabcc2679ddb763",
                        "recordTimeStr": "2024-03-06 16:09:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712873022,
                        "handled": false,
                        "recordId": "65e825e95eabcc2679de5a18",
                        "recordTimeStr": "2024-03-06 16:14:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.2,
                                "text": "0.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713173022,
                        "handled": false,
                        "recordId": "65e827155eabcc2679debca6",
                        "recordTimeStr": "2024-03-06 16:19:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713473022,
                        "handled": false,
                        "recordId": "65e828415eabcc2679df1ffa",
                        "recordTimeStr": "2024-03-06 16:24:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713773031,
                        "handled": false,
                        "recordId": "65e8296d5eabcc2679df8034",
                        "recordTimeStr": "2024-03-06 16:29:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.3,
                                "text": "0.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714073032,
                        "handled": false,
                        "recordId": "65e82a995eabcc2679dfe50c",
                        "recordTimeStr": "2024-03-06 16:34:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.3,
                                "text": "0.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714373032,
                        "handled": false,
                        "recordId": "65e82bc55eabcc2679e04378",
                        "recordTimeStr": "2024-03-06 16:39:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714673032,
                        "handled": false,
                        "recordId": "65e82cf15eabcc2679e0e424",
                        "recordTimeStr": "2024-03-06 16:44:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714973032,
                        "handled": false,
                        "recordId": "65e82e1d5eabcc2679e146aa",
                        "recordTimeStr": "2024-03-06 16:49:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.1,
                                "text": "0.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715273032,
                        "handled": false,
                        "recordId": "65e82f495eabcc2679e1a9fe",
                        "recordTimeStr": "2024-03-06 16:54:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.3,
                                "text": "0.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715573032,
                        "handled": false,
                        "recordId": "65e830755eabcc2679e20a13",
                        "recordTimeStr": "2024-03-06 16:59:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 1,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "风速",
                                "value": 0.0,
                                "text": "0.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715873036,
                        "handled": false,
                        "recordId": "65e831a15eabcc2679e26eee",
                        "recordTimeStr": "2024-03-06 17:04:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 10.9,
                                "text": "10.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712573022,
                        "handled": false,
                        "recordId": "65e824bd5eabcc2679ddb765",
                        "recordTimeStr": "2024-03-06 16:09:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 9.2,
                                "text": "9.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712873022,
                        "handled": false,
                        "recordId": "65e825e95eabcc2679de5a1a",
                        "recordTimeStr": "2024-03-06 16:14:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 9.0,
                                "text": "9.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713173022,
                        "handled": false,
                        "recordId": "65e827155eabcc2679debca8",
                        "recordTimeStr": "2024-03-06 16:19:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 8.9,
                                "text": "8.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713473022,
                        "handled": false,
                        "recordId": "65e828415eabcc2679df1ffc",
                        "recordTimeStr": "2024-03-06 16:24:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 7.4,
                                "text": "7.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713773031,
                        "handled": false,
                        "recordId": "65e8296d5eabcc2679df8036",
                        "recordTimeStr": "2024-03-06 16:29:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 5.2,
                                "text": "5.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714073032,
                        "handled": false,
                        "recordId": "65e82a995eabcc2679dfe50e",
                        "recordTimeStr": "2024-03-06 16:34:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 5.4,
                                "text": "5.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714373032,
                        "handled": false,
                        "recordId": "65e82bc55eabcc2679e0437a",
                        "recordTimeStr": "2024-03-06 16:39:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 5.2,
                                "text": "5.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714673032,
                        "handled": false,
                        "recordId": "65e82cf15eabcc2679e0e426",
                        "recordTimeStr": "2024-03-06 16:44:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 5.1,
                                "text": "5.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714973032,
                        "handled": false,
                        "recordId": "65e82e1d5eabcc2679e146ac",
                        "recordTimeStr": "2024-03-06 16:49:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 4.9,
                                "text": "4.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715273032,
                        "handled": false,
                        "recordId": "65e82f495eabcc2679e1aa00",
                        "recordTimeStr": "2024-03-06 16:54:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 5.1,
                                "text": "5.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715573032,
                        "handled": false,
                        "recordId": "65e830755eabcc2679e20a15",
                        "recordTimeStr": "2024-03-06 16:59:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "空气温度",
                                "value": 4.9,
                                "text": "4.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715873036,
                        "handled": false,
                        "recordId": "65e831a15eabcc2679e26ef0",
                        "recordTimeStr": "2024-03-06 17:04:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 14.4,
                                "text": "14.4",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712573022,
                        "handled": false,
                        "recordId": "65e824bd5eabcc2679ddb765",
                        "recordTimeStr": "2024-03-06 16:09:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 15.3,
                                "text": "15.3",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712873022,
                        "handled": false,
                        "recordId": "65e825e95eabcc2679de5a1a",
                        "recordTimeStr": "2024-03-06 16:14:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 15.7,
                                "text": "15.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713173022,
                        "handled": false,
                        "recordId": "65e827155eabcc2679debca8",
                        "recordTimeStr": "2024-03-06 16:19:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 15.6,
                                "text": "15.6",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713473022,
                        "handled": false,
                        "recordId": "65e828415eabcc2679df1ffc",
                        "recordTimeStr": "2024-03-06 16:24:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 17.7,
                                "text": "17.7",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713773031,
                        "handled": false,
                        "recordId": "65e8296d5eabcc2679df8036",
                        "recordTimeStr": "2024-03-06 16:29:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 17.9,
                                "text": "17.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714073032,
                        "handled": false,
                        "recordId": "65e82a995eabcc2679dfe50e",
                        "recordTimeStr": "2024-03-06 16:34:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 19.2,
                                "text": "19.2",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714373032,
                        "handled": false,
                        "recordId": "65e82bc55eabcc2679e0437a",
                        "recordTimeStr": "2024-03-06 16:39:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 18.9,
                                "text": "18.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714673032,
                        "handled": false,
                        "recordId": "65e82cf15eabcc2679e0e426",
                        "recordTimeStr": "2024-03-06 16:44:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 18.9,
                                "text": "18.9",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714973032,
                        "handled": false,
                        "recordId": "65e82e1d5eabcc2679e146ac",
                        "recordTimeStr": "2024-03-06 16:49:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 18.8,
                                "text": "18.8",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715273032,
                        "handled": false,
                        "recordId": "65e82f495eabcc2679e1aa00",
                        "recordTimeStr": "2024-03-06 16:54:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 19.1,
                                "text": "19.1",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715573032,
                        "handled": false,
                        "recordId": "65e830755eabcc2679e20a15",
                        "recordTimeStr": "2024-03-06 16:59:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 11,
                        "data": [
                            {
                                "registerId": 2,
                                "registerName": "空气湿度",
                                "value": 21.0,
                                "text": "21.0",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715873036,
                        "handled": false,
                        "recordId": "65e831a15eabcc2679e26ef0",
                        "recordTimeStr": "2024-03-06 17:04:33"
                    }
                ]
            },
            {
                "code": 1000,
                "message": "成功",
                "data": [
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 4.0,
                                "text": "南风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712573022,
                        "handled": false,
                        "recordId": "65e824bd5eabcc2679ddb764",
                        "recordTimeStr": "2024-03-06 16:09:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 5.0,
                                "text": "西南风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709712873022,
                        "handled": false,
                        "recordId": "65e825e95eabcc2679de5a19",
                        "recordTimeStr": "2024-03-06 16:14:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 4.0,
                                "text": "南风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713173022,
                        "handled": false,
                        "recordId": "65e827155eabcc2679debca7",
                        "recordTimeStr": "2024-03-06 16:19:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 3.0,
                                "text": "东南风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713473022,
                        "handled": false,
                        "recordId": "65e828415eabcc2679df1ffb",
                        "recordTimeStr": "2024-03-06 16:24:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 4.0,
                                "text": "南风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709713773031,
                        "handled": false,
                        "recordId": "65e8296d5eabcc2679df8035",
                        "recordTimeStr": "2024-03-06 16:29:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 2.0,
                                "text": "东风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714073032,
                        "handled": false,
                        "recordId": "65e82a995eabcc2679dfe50d",
                        "recordTimeStr": "2024-03-06 16:34:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 4.0,
                                "text": "南风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714373032,
                        "handled": false,
                        "recordId": "65e82bc55eabcc2679e04379",
                        "recordTimeStr": "2024-03-06 16:39:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 4.0,
                                "text": "南风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714673032,
                        "handled": false,
                        "recordId": "65e82cf15eabcc2679e0e425",
                        "recordTimeStr": "2024-03-06 16:44:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 2.0,
                                "text": "东风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709714973032,
                        "handled": false,
                        "recordId": "65e82e1d5eabcc2679e146ab",
                        "recordTimeStr": "2024-03-06 16:49:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 0.0,
                                "text": "北风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715273032,
                        "handled": false,
                        "recordId": "65e82f495eabcc2679e1a9ff",
                        "recordTimeStr": "2024-03-06 16:54:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 2.0,
                                "text": "东风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715573032,
                        "handled": false,
                        "recordId": "65e830755eabcc2679e20a14",
                        "recordTimeStr": "2024-03-06 16:59:33"
                    },
                    {
                        "deviceAddr": 40287568,
                        "nodeId": 2,
                        "data": [
                            {
                                "registerId": 1,
                                "registerName": "风向",
                                "value": 4.0,
                                "text": "南风",
                                "alarmLevel": 0
                            }
                        ],
                        "lat": 40.448054,
                        "lng": 115.988705,
                        "recordTime": 1709715873036,
                        "handled": false,
                        "recordId": "65e831a15eabcc2679e26eef",
                        "recordTimeStr": "2024-03-06 17:04:33"
                    }
                ]
            }
        ]
    }
})

export default lineChartDataSlice.reducer